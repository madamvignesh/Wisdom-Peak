import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.li`
  background-color: ${(props) => (props.isDarkTheme ? "#1E1E1E" : "#FFFFFF")};
  color: ${(props) => (props.isDarkTheme ? "#F1F1F" : "#333333")};
  padding: 20px;
  border-radius: 12px;
  list-style-type: none;
  animation-delay: calc(var(--order) * 100ms);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, border-left 0.3s ease;
  animation: fadeIn 0.5s ease-in-out;
  animation-delay: calc(var(--order) * 100ms);
  animation-fill-mode: backwards;

  &:hover {
    transform: translateY(-5px);
    border-left: 4px solid #007bff; 
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Heading = styled.h4`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: ${(props) => (props.isDarkTheme ? "#E4E4E4" : "#0056b3")};
  text-align: start;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.isDarkTheme ? "#003EFF" : "#007bff")};
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Mail = styled.p`
  font-size: 16px;
  text-align: start;
  color: ${(props) => (props.isDarkTheme ? "#F5E4E4" : "#555")};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.isDarkTheme ? "#FF6347" : "#007bff")};
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const CityHeading = styled.h4`
  font-size: 18px;
  color: ${(props) => (props.isDarkTheme ? "#98FB98" : "#333")};
  margin-top: 12px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.isDarkTheme ? "#00FA9A" : "#0056b3")};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Removes underline */
  display: block; /* Ensures full clickable area */
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }
`;
