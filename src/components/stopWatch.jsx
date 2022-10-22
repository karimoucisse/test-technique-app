import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { updateTimer } from "../redux/timerSlice"

const Container = styled.h1`
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 35px;
    width: 150px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StopWatch = () => {
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const timeOn = useSelector(state => state.timer.timeOn)
    const dispatch = useDispatch()

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

    useEffect(() => {
        dispatch(updateTimer(`${minute}min et ${second}s`))
    }, [minute, second])


  return (
    <Container>
        {minute}:{second}
    </Container>
  )
}

export default StopWatch