import styled from "styled-components";
import { Link } from "react-router-dom"

export const Card = styled.li`
  background-color: ${(props) => (props.isDarkTheme ? "#201515" : "#E9F6E9")};
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
  padding: 16px;
  border-radius: 8px;
  list-style-type: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  @media(max-width: 768px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;  
  }
`;

export const Heading = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
  text-align: start;  

  @media(max-width: 768px) {
    text-align: left; 
  }
`;

export const Mail = styled.p`
  font-size: 16px;
  text-align: start; 
  color: ${(props) => (props.isDarkTheme ? "#F5E4E4" : "#555")};

  @media(max-width: 768px) {
    text-align: left; 
  }
`;

export const CityHeading = styled.h4`
  font-size: 18px;
  color: ${(props) => (props.isDarkTheme ? "#F0F7F0" : "#333")};
  margin-top: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none; // Removes the underline
`;