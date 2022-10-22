import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  padding: 30px 70px;
  border-color: white;
  color: black;
  font-size: 30px;
  font-weight: bold;
`

const ValidationButton = () => {
  return (
    <Button>validé</Button>
  )
}

export default ValidationButton