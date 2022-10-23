import testSlice, { 
    levelUpdate, 
    beforeTest, 
    runTest, 
    updateResult,
    EndOfGame
} from '../redux/testSlice';

export const handleTest = (
    dispatch, 
    currentTest, 
    setClick, click, 
    codeEditorValue
) => {

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
      dispatch(updateResult(false)) // return false if at least one test is false
    }else {
      dispatch(updateResult(true)) // return true if all tests are true
      setClick(click + 1) 
    }
}