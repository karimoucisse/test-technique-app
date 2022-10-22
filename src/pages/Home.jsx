import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { javascriptTests } from "../javascriptTests"
import { gameLaunch, runTest } from "../redux/testSlice"
import { starTimer } from "../redux/timerSlice"

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background: url("/timer.jpg") no-repeat center;
    background-size: cover;
`
const ShadowBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(11, 10, 10, 0.6);
    z-index: 2;
`
const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 3.5em;
    max-width: 700px;
`
const Button = styled.button`
    margin-top: 40px;
    padding: 20px 50px;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
`
const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const test = useSelector(state => state.tests.currentTest)

    const handleClick = () => {
        const tests = javascriptTests
        dispatch(gameLaunch(tests))
        dispatch(starTimer())  //run timer
        if(test) {
            navigate('/games')
        }    }
  return (
    <Container>
        <ShadowBox/>
        <Wrapper>
            <Title>YOU CAN'T JAVASCRIPT UNDER PRESSURE</Title>
            <Button onClick={handleClick}>Start the game</Button>
        </Wrapper>
    </Container>
  )
}

export default Home