import styled from "styled-components"

export const MainContainer = styled.div``
export const UesrContainer = styled.ul`
  display: grid;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 768px){
    grid-template-columns: repeat(1,1fr);
  }
`
export const Container = styled.div``

export const Input = styled.input`
  border: 1px solid #303030;
`

export const Select = styled.select``