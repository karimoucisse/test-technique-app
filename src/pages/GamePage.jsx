import styled from 'styled-components'
import CodeEditor from '../components/CodeEditor'
import ValidationButton from '../components/ValidationButton'
import Console from '../components/Console'
import StopWatch from '../components/StopWatch'
import Level from '../components/Level'

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
  padding: 40px 30px;
  background-color: teal;
  position: relative;
`
const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  background: url("/motif.jpg") no-repeat center;
  background-size: cover;
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
        <Level/>
        <Title>You can't Javascript under pressure</Title>
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