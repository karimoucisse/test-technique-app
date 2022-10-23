import { useSelector } from "react-redux"
import {useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import CongratulationsMessage from "./CongratulationsMessage";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;
  overflow: auto;
`
const ResultContainer = styled.div`
  padding: 5px 50px;
`
const ParagraphContainer = styled.div`
  margin-bottom: 10px;
`
const MessageParagraph = styled.div`
  background-color: teal;
  color: white;
  padding: 5px 20px;
  font-size: 17px;
  margin-bottom: 10px;
`
const ResultParagraph = styled.div`
  width: 100%;
  font-size: 17px;
  padding: 5px 20px;
  &:nth-child(2) {
    background-color: ${props => props.result === "true" ? "teal" : "#CC0000" };
    color: white;
  }
`
const Console = () => {
  const testResult = useSelector(state => state.tests.result)
  const consoleResult = useSelector(state => state.tests.consoleResult)
  const consoleMessage = useSelector(state => state.tests.currentTest.consoleMessage)
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time we add a messages 
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [consoleResult]);

  return (
    <Container>
      <MessageParagraph>{consoleMessage}</MessageParagraph>
      <ResultContainer>
        {consoleResult.map((element, index) => {
          return <ParagraphContainer key={index}>
            <ResultParagraph >{element.testing}</ResultParagraph>
            <ResultParagraph result= {element.result}>{element.resultText}</ResultParagraph>
          </ParagraphContainer>
        })}
        <div ref={bottomRef} />
        {testResult && <CongratulationsMessage/>}
      </ResultContainer>
    </Container>
  )
}

export default Console