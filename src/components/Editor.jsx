import { useState } from 'react';
import styled from "styled-components"


const Container = styled.div`
    /* display: flex; */
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
    const [data, setData] = useState()

    function handleChange(e) {
        const value = e.target.value
        setData(value)
    }

    const handleClick = () => {

        let a = `const f = ${data}; f(2)`
        a = eval(a)
        console.log(a);
    }

    return (
        <Container>
            <Textarea 
                id="story" name="story"
                rows="5" cols="33"
                onChange={handleChange}
            >
                It was a dark and stormy night...
            </Textarea>
            <button onClick={handleClick}>click here</button>
        </Container>
    );
  
}

export default Editor