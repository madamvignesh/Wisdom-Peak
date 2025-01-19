import styled from "styled-components";
import { Link } from "react-router-dom"

export const UesrContainer = styled.ul`
  display: grid;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
`

export const Card = styled.li`
  background-color: ${(props) => (props.isDarkTheme ? "#7E716E" : "#E9F6E9")};
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
`;

export const Heading = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
`;

export const Mail = styled.p`
  font-size: 16px;
  color: ${(props) => (props.isDarkTheme ? "#E2BFBF" : "#555")};
`;

export const CityHeading = styled.h4`
  font-size: 18px;
  color: ${(props) => (props.isDarkTheme ? "#aaa" : "#333")};
  margin-top: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none; // Removes the underline
`;