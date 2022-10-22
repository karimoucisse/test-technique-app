import styled from 'styled-components'
import Editor from '../components/Editor'
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
  background-color: darkblue;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GamePage = () => {

  return (
    <Container>
      <Left>
        <StopWatch/>
        <Instruction/>
        <ValidationButton/>
      </Left>
      <Right>
        <Editor/>
        <Console/>
      </Right>
    </Container>
  )
}

export default GamePage