import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import { levelUpdate, beforeTest, runTest, } from '../redux/testSlice';


const Container = styled.div`
    padding: 20px 50px;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 50vh;
    border: none;
    background-color: black;
    color: white;
    font-size: 18px;
`

const Editor = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState()
    const currentTest = useSelector(state => state.tests.currentTest)
    const testResult = useSelector(state => state.tests.finalResult)

    function handleChange(e) {
        const value = e.target.value
        setData(value)
    }

    useEffect(() => {
        const testFunction =  currentTest.code.join("\n")
        setData(testFunction)
    }, [currentTest])

    const handleTest = () => {
        dispatch(beforeTest())
        currentTest.tests.forEach(test => {
            const param = JSON.stringify(test.param)
            let a = `const f = ${data}; f(${param})`
            a = eval(a)

            if(a == test.result) {
                dispatch(runTest({
                    message : {
                        result: "true",
                        testing: `test: "${currentTest.name}(${param});"...`,
                        resultText: `vrai: ${a} est la bonne réponse`
                    }, 
                    results: true
                }))
            } else {
                dispatch(runTest({
                    message : {
                        result: "false",
                        testing: `test: "${currentTest.name}(${param});"...`,
                        resultText: `faux: obtenu ${a} mais attendu ${test.result}. Essayez à nouveau!`
                    },
                    results: false
                }))
            }
        });
    }
    const handleClick = async () => {
        handleTest()
    }
    useEffect(() => {
        if(testResult === true) {
            dispatch(levelUpdate())
        } 
    }, [testResult])

    return (
        <Container>
            <Textarea 
                id="story" name="story"
                rows="5" cols="33"
                onChange={handleChange}
                value= {data}
            >
                It was a dark and stormy night...
            </Textarea>
            <button onClick={handleClick}>click here</button>
        </Container>
    );
  
}

export default Editor