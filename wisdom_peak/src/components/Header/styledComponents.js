import styled from "styled-components"

export const HeaderContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  align-items: center;  
  border: 1px solid red;
`

export const Heading = styled.h1`
  color: ${props => props.color};
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
`