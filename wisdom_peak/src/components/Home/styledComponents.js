import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => (props.isDarkTheme ? "#525252" : "#f9f9f9")};
  padding: 20px;
  min-height: 100vh;

  h1 {
    color: ${(props) => (props.isDarkTheme ? "#ffffff" : "#333333")};
    margin-bottom: 20px;
  }
  h3 {
    color: ${(props) => (props.isDarkTheme ? "#ffffff" : "#333333")};
  }
`;

export const UesrContainer = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.isDarkTheme ? "#ffffff" : "#333333")};
`;

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
