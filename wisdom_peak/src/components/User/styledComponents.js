import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserDetailContainer = styled.div`
  background-color: ${(props) => (props.isDarkTheme ? "#333" : "#D9D9D9")};
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
`;

export const DetailItem = styled.div`
  font-size: 18px;
  margin-bottom: 12px;

  strong {
    font-weight: bold;
  }

  div {
    margin-left: 20px;
    font-style: italic;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 12px;
`
export const Button = styled.button`
  background-color: blue;
  border:0px;
  width: 100px;
  height: 30px;
  color: white;
  border-radius: 6px;
`