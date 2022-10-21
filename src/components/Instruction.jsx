import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  color: white;
  font-size: 20px;
`
const Instruction = () => {
  const test = useSelector(state => state.tests.currentTest)
  
  return (
    <Container>
      {test.instruction}
    </Container>
  )
}

export default Instruction