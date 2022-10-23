import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TitleContainer = styled.div`
    margin-bottom: 20px;
`
const Title = styled.h1`
    font-size: 54px;
`
const Button = styled.button`
    background-color: teal;
    color: white;
    border: none;
    padding: 20px 40px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
`
const NotFound = () => {
    const navigate = useNavigate()
  return (
    <Container>
        <TitleContainer>
            <Title>Sorry,</Title>
            <Title>PAGE NOT FOUND</Title>
        </TitleContainer>
        <Button onClick={() => navigate('/')}>GO HOME</Button>
    </Container>
  )
}

export default NotFound