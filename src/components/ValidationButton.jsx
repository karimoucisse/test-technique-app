import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { 
  levelUpdate, 
  beforeTest, 
  runTest, 
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
  const [result, setResult] = useState(false)
  const currentTest = useSelector(state => state.tests.currentTest)
  const codeEditorValue = useSelector(state => state.tests.codeEditorValue)
  const level = useSelector(state => state.tests.level)
  const maxLevel = useSelector(state => state.tests.maxLevel)

  const handleTest = () => {
    const resultArray = []
    dispatch(beforeTest())

    currentTest.tests.forEach(test => {
      const param = JSON.stringify(test.param)
      let a = `const f = ${codeEditorValue}; f(${param})`
      a = eval(a)

      if(a === test.result) {
        dispatch(runTest({
          message : {
            result: "true",
            testing: `test: "${currentTest.name}(${param});"...`,
            resultText: `vrai: ${a} est bien la bonne réponse`
          }, 
          results: true
        }))
        resultArray.push("true")
      } else {
        dispatch(runTest({
          message : {
              result: "false",
              testing: `test: "${currentTest.name}(${param});"...`,
              resultText: `faux: obtenu ${a} mais attendu ${test.result}. Essayez à nouveau!`
          },
          results: false
        }))
        resultArray.push("false")
      }
    });
    if(resultArray.includes("false")) {
      setResult(false)
      return false
    }else {
      setResult(true)
      setClick(click + 1)
      console.log(result, click);
      return true
    }
  }
  const handleSecondeClick = () => {
    dispatch(levelUpdate());
    setClick(0)
    dispatch(beforeTest())

    if(level === maxLevel) {
      navigate("/end")
    }
  }

  const handleClick = () => {
    handleTest();
  }

  useEffect(() => {
    if (click === 2 && result) {
      handleSecondeClick()
    }
  }, [click])

  
  return (
    <Button onClick={handleClick}>Test</Button>
  )
}

export default ValidationButton