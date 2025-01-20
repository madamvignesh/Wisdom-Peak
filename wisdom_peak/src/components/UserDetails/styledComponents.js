import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.li`
  background-color: ${(props) => (props.isDarkTheme ? "#1E1E1E" : "#FFFFFF")};
  color: ${(props) => (props.isDarkTheme ? "#F1F1F" : "#333333")};
  padding: 20px;
  border-radius: 12px;
  list-style-type: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    border-left: 4px solid ${props =>props.isDarkTheme ? "#00E4FF" : "#FC2E2E" }; 
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  overflow: hidden;
  align-items: center;
  margin-bottom: 12px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media(max-width: 768px){
   width: 80px;
   height: 80px;
  }
`

export const UserHeading = styled.div`
  display: flex;
  flex-direction: column;
  justidy-content: center;
  align-items: flex-start;
  text-align: start;
`

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
    font-size: 18px;
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
    font-size: 14px;
  }
`;

export const CityHeading = styled.h4`
  font-size: 18px;
  color: ${(props) => (props.isDarkTheme ? "#fffdd0" : "#333")};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.isDarkTheme ? "#00FA9A" : "#0056b3")};
  }
  @media(max-width: 768px){
    font-size: 16px;
  }
`

export const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  h4{
    color: ${props => props.isDarkTheme ? "#9D85FF" : "#3200FF" }
  }

  @media(max-width: 768px){
    h4{
      font-size: 16px;
    }
  }
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
