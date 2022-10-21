import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { javascriptTests } from "../javascriptTests"
import { gameLaunch } from "../redux/testSlice"

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
    font-size: 5em;
    max-width: 700px;
`
const Button = styled.button`
    margin-top: 40px;
    padding: 20px 50px;
    cursor: pointer;
    border: none;
    font-size: 20px;
`
const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const test = useSelector(state => state.tests.currentTest)

    const handleClick = () => {
        const tests = javascriptTests
        dispatch(gameLaunch(tests))
        if(test) {
            navigate('/games')
        }
    }
  return (
    <Container>
        <ShadowBox/>
        <Wrapper>
            <Title>Coder du Javascript sous pressions</Title>
            <Button onClick={handleClick}>Commencer le jeu</Button>
        </Wrapper>
    </Container>
  )
}

export default Home