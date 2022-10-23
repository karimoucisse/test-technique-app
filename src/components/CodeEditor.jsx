import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import { updateCodeEditorValue, } from '../redux/testSlice';


const Container = styled.div`
    padding: 20px 50px;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 50vh;
    padding: 20px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: black;
    border: 2px solid black;
    font-size: 18px;
    background-color: #f2ede8;
`

const Editor = () => {

    const dispatch = useDispatch()
    const currentTest = useSelector(state => state.tests.currentTest)
    const codeEditorValue = useSelector(state => state.tests.codeEditorValue)
    const testResult = useSelector(state => state.tests.result)

    // HANDLE yexyrea value
    function handleChange(e) {
        const value = e.target.value
        dispatch(updateCodeEditorValue(value))
    }

    useEffect(() => {
        const testFunction = currentTest.code?.join("\n")
        dispatch(updateCodeEditorValue(testFunction))
    }, [currentTest])

    return (
        <Container>
            <Textarea 
                id="story" name="story"
                rows="5" cols="33"
                disabled = {testResult}
                onChange={handleChange}
                value= {codeEditorValue}
            >
                
            </Textarea>
        </Container>
    );
  
}

export default Editor