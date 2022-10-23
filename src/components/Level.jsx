import { useSelector } from "react-redux"
import styled from "styled-components"

const Container = styled.div`
   position: absolute;
    top: 0px;
    right: 0;
    font-size: 35px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: teal;
`

const Level = () => {
    const level = useSelector(state => state.tests.level)
  return (
    <Container>{level}</Container>
  )
}

export default Level