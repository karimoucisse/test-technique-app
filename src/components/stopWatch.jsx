import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.h1`
    /* border: black 2px solid; */
    /* background-color: #ebe4e4; */
    color: white;
    /* padding: 10px 35px; */
`

const StopWatch = () => {
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const timeOn = useSelector(state => state.timer.timeOn)

    // handle second
    useEffect(() => { 
        let interval = null
        if(timeOn) {
            interval = setInterval(() => {
                setSecond(prev => prev === 59 ? 0 : prev +1)
            }, 1000) // function run every second
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
        
    }, [timeOn])

    // handle minute
    useEffect(() => {
        let interval = null
        if(timeOn) {
            interval = setInterval(() => {
                setMinute(prev => prev +1)
            }, 60000) // function run every minute
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
        
    }, [timeOn])



  return (
    <Container>
        {minute} : {second}
    </Container>
  )
}

export default StopWatch