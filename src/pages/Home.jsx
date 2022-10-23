import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { startGame } from "../functions/startgame"


const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-color: black;
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
const Paragraph = styled.p`
    color: white;
    margin: 40px 0;
`
const Span = styled.span`
    font-weight: 700;
`
const Button = styled.button`
    /* margin-top: 40px; */
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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const test = useSelector(state => state.tests.currentTest)

    const handleClick = () => {
        startGame(dispatch)
        if(test) {
            navigate('/games')
        }    
    }

  return (
    <Container>
        <Wrapper>
            <Title>YOU CAN'T JAVASCRIPT UNDER PRESSURE</Title>
            <Paragraph>Five functions to fill. One ticking clock. <Span>How fast can you code?</Span></Paragraph>
            <Button onClick={handleClick}>Start the game</Button>
        </Wrapper>
    </Container>
  )
}

export default Home