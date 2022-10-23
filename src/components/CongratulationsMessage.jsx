import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
    background-color:#B8860B ;
    font-size: 17px;
    color: white;
    padding: 5px 20px;
`

const CongratulationsMessage = () => {
    const level  = useSelector(state => state.tests.level)
    const maxLevel  = useSelector(state => state.tests.level) +1
    const time  = useSelector(state => state.timer.time) 
    
  return (
    <Container>
        {level !== maxLevel && 
            `SUCCESS! All tests passed. You've used ${time} so far. Well done!
            Ready for level ${level +1}? Click the button "Test" to move on.`
        }
    </Container>
  )
}

export default CongratulationsMessage