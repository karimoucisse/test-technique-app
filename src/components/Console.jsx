import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  overflow: auto;
  padding: 20px 50px;
`
const ResultContainer = styled.div`
  margin-bottom: 10px;
`
const MessageParagraph = styled.div`
  background-color: teal;
  color: white;
  padding: 5px 20px;
  font-size: 17px;
  margin-bottom: 10px;
`
const ResultParagraph = styled.div`
  width: 100%;
  font-size: 17px;
  padding: 5px 20px;
  /* border-radius: 10px; */
  &:nth-child(2) {
    background-color: ${props => props.result === "true" ? "teal" : "#CC0000" };
    /* color: ${props => props.result === "true" ? "black" : "white" }; */
    color: white;
  }
`
const Console = () => {
  const consoleResult = useSelector(state => state.tests.consoleResult)
  const consoleMessage = useSelector(state => state.tests.currentTest.consoleMessage)

  return (
    <Container>
      <MessageParagraph>{consoleMessage}</MessageParagraph>
      {consoleResult.map((element, index) => {
        return <ResultContainer key={index}>
          <ResultParagraph >{element.testing}</ResultParagraph>
          <ResultParagraph result= {element.result}>{element.resultText}</ResultParagraph>
        </ResultContainer>
      })}
    </Container>
  )
}

export default Console