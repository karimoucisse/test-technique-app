import { useState } from 'react'
import styled from 'styled-components'
import Editor from './components/Editor'
import Instruction from './components/Instruction'
import ValidationButton from './components/Instruction'
import Console from './components/Instruction'

const Container = styled.div`
  height: 100vh;
  display: flex;
`
const Left = styled.div`
  flex: 1;
  /* background-color: darkblue; */
`
const Right = styled.div`
  flex: 1;
`
const App = () => {
  // const [jsValue, setJsValue] = useState()
  // console.log(jsValue);
  return (
    <Container>
      <Left>
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

export default App