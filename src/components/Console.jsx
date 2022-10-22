import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: red; */
  padding: 20px 40px;
  overflow: auto;
`
const MessageContainer = styled.div`
  margin-bottom: 10px;
`
const Paragraph = styled.div`
  width: 100%;
  font-size: 17px;
  padding: 5px 20px;
  border-radius: 10px;
  &:nth-child(2) {
    background-color: ${props => props.result === "true" ? "#ccffcc" : "#CC0000" };
    color: ${props => props.result === "true" ? "black" : "white" };
  }
`
const Console = () => {
  const message = useSelector(state => state.tests.consoleMessage)

  return (
    <Container>
      {message.map((element, index) => {
        return <MessageContainer key={index}>
          <Paragraph >{element.testing}</Paragraph>
          <Paragraph result= {element.result}>{element.resultText}</Paragraph>
        </MessageContainer>
      })}
    </Container>
  )
}

export default Console