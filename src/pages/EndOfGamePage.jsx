import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("/congratulations.jpg") no-repeat center;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ShadowBox = styled.div`
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(11, 10, 10, 0.5);
  z-index: 2;
`
const Box = styled.div`
  width: 40em;
  position: relative;
  z-index: 3;
  flex-wrap: wrap;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: white;
  letter-spacing: 0.5px;
`
const Paragraph = styled.p`
  font-size: 28px;
  color: white;
  text-decoration: underline;
`
const EndOfGamePage = () => {
  const time  = useSelector(state => state.timer.time) 

  return (
    <Container>
        <ShadowBox/>
        <Box>
          <Title>YOU CAN JAVASCRIPT UNDER PRESSURE</Title>
          <Paragraph>{time} for all 5 levels. Well done !</Paragraph>
        </Box>
    </Container>
  )
}

export default EndOfGamePage