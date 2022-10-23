import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import testSlice, { 
  levelUpdate, 
  beforeTest, 
  runTest, 
  updateResult
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

  const handleTest = () => {
    const resultArray = []
    dispatch(beforeTest())

    currentTest.tests.forEach(test => {
      const param = JSON.stringify(test.param)
      let testFunction = `const f = ${codeEditorValue}; f(${param})`
      let expectedResult = eval(testFunction)

      if(expectedResult === test.result) {

        dispatch(runTest({ 
          message : { // display message in the console
            // see more in the file Console.jsx in the components folder
            result: "true",
            testing: `test: "${currentTest.name}(${param});"...`,
            resultText: `RIGHT: ${expectedResult} is the right answer.`
          }, 
          results: true
        }))
        resultArray.push("true")
      } else {
        dispatch(runTest({
          message : { // display message in the console
              result: "false",
              testing: `test: "${currentTest.name}(${param});"...`,
              resultText: `WRONG: Got ${expectedResult} but expected ${test.result}. Try again!`
          },  
          results: false
        }))
        resultArray.push("false")
      }
    });

    if(resultArray.includes("false")) {
      dispatch(updateResult(false)) 
      return false  // return false if at least one test is false
    }else {
      dispatch(updateResult(true)) 
      setClick(click + 1)
      console.log(result, click);
      return true // return true if all test are true
    }
  }

  const handleSecondeClick = () => {
    dispatch(levelUpdate()); // increase current test level
    dispatch(beforeTest()) // reset the console, and the test Result 
    // see more at testSlice in redux folder
    setClick(0)

    if(level === maxLevel) {
      navigate("/end")
    }
  }

  const handleClick = () => {
    handleTest();  // the first click test the user function
  }

  useEffect(() => {
    if (click === 2 && result) {
      handleSecondeClick() // if the function "handletest" return true, 
      // then the second click will launch the function "handleSecondeClick"
    }
  }, [click])

  
  return (
    <Button onClick={handleClick}>Test</Button>
  )
}

export default ValidationButton