import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { handleTest } from "../functions/handleTest";
import { 
  levelUpdate, 
  beforeTest, 
  EndOfGame
} from '../redux/testSlice';

const Button = styled.button`
  cursor: pointer;
  padding: 30px 100px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: inherit;
  color: white;
  font-size: 30px;
  font-weight: bold;
  transition:  all ease 0.3;
  &:hover {
    background-color: #0a7878;
  }
`

const ValidationButton = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [click, setClick] = useState(0)
  const result = useSelector(state => state.tests.result)
  const currentTest = useSelector(state => state.tests.currentTest)
  const codeEditorValue = useSelector(state => state.tests.codeEditorValue)
  const level = useSelector(state => state.tests.level)
  const maxLevel = useSelector(state => state.tests.maxLevel)

  const handleSecondeClick = () => {
    dispatch(levelUpdate()); // increase current test level
    dispatch(beforeTest()) // reset the console, and the test Result 
    // see more at testSlice in redux folder
    setClick(0)
  }

  const handleClick = () => {
    handleTest(
      dispatch, 
      currentTest,
      setClick, 
      click, 
      codeEditorValue
    )  // test the function written by the user
  }

  useEffect(() => {
    if (click === 2 && result) {
      handleSecondeClick() // if the function "handletest" return true, 
      // then the second click will launch the function "handleSecondeClick"
    }
  }, [click, handleSecondeClick, result])

  useEffect(() => {
    if(result && level === maxLevel) {
      dispatch(EndOfGame()) // when the last lvl is finished
      // the testResult state is set to true, and the timer is stoped
      navigate("/end")
    }
  }, [result, dispatch, level, maxLevel])

  
  return (
    <Button onClick={handleClick}>Test</Button>
  )
}

export default ValidationButton