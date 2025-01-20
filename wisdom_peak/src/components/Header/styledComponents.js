import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.nav`
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
export const StyledLink = styled(Link)`
  text-decoration: none; 
  display: block; 
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    transform: scale(1.02);
    text-decoration: underline; 
  }
`