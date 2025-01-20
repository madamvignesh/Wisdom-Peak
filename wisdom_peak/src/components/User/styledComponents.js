import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  background-color: ${props=>props.isDarkTheme ? "#474545" : "#ffffff"};
  padding: 20px;
`

export const UserDetailContainer = styled.div`
  background-color: ${(props) => (props.isDarkTheme ? "#333" : "#f9f9f9")};
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0px auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0px; 
`
export const DescHead = styled.h3`
  font-size: 26px;
  margin-bottom: 0px; 

  spam{
    font-weight: normal;
    font-size: 20px;
  }
  @media(max-width: 768px){
    font-size: 20px;
  }
`

export const Desc = styled.p`
  font-size: 22px;

  spam{
   font-size: 18px;
   font-style: italic;
  }

  @media(max-width: 768px){
    font-size: 18px;

    spam{
      font-size: 16px;
    }
  }
`

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
  color: ${(props) => (props.isDarkTheme ? "#fff" : "#000")};
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const DetailItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 768px){
    flex-direction: column;
  }
`

export const HeadingDetails = styled.div`
  padding: 12px;
  margin-left: 10px;
  @media(max-width: 768px){
    text-align: center;
  }
`

export const Head = styled.h2`
  font-size: 32px;
  @media(max-width: 768px){
    font-size: 24px;
  }
`
export const SubHead = styled.p`
  font-size: 18px;
  @media(max-width: 768px){
    font-size: 18px;
  }
`

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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 24px;
    color: #007bff;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 24px;
    color: #ff4d4f;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin: 0px auto;
`