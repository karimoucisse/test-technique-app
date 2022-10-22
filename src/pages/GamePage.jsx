import styled from 'styled-components'
import CodeEditor from '../components/CodeEditor'
import Instruction from '../components/Instruction'
import ValidationButton from '../components/ValidationButton'
import Console from '../components/Console'
import StopWatch from '../components/StopWatch'

const Container = styled.div`
  height: 100vh;
  display: flex;
`
const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0px 50px;
  background-color: teal;
  position: relative;
`
const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  color: white;
  font-size: 2.6em;
`
const GamePage = () => {

  return (
    <Container>
      <Left>
        <StopWatch/>
        <Title>You can't Javascript under pressure</Title>
        {/* <Instruction/> */}
        <ValidationButton/>
      </Left>
      <Right>
        <CodeEditor/>
        <Console/>
      </Right>
    </Container>
  )
}

export default GamePage