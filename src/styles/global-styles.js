import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import colors from '../styles/pallet';

const { gray100 } = colors;

export const GlobalStyle = createGlobalStyle
`
  *
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
  }

  html, body, #root
  {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;

    @media (max-width: 768px)
    {
      font-size: 50%;
    }
  }

  a, li, ul
  {
    text-decoration: none;
    list-style-type: none;
  }  

  .tostado
  {
    font-size: 5rem;
  }
`
export const MainContainer = styled.main
`
  height: 100%;
  width: 100%;
  background: ${gray100};
`;


export const Wrapper = styled.div
`
  box-sizing: content-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${gray100};
`;