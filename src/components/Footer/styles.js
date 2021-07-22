import styled from 'styled-components';
import colors from '../../styles/pallet';

const { yellow, blue } = colors;

export const Container = styled.footer
`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${blue};
  border-top: 1rem solid ${yellow};
  color: white;
`;

export const SubContainer = styled.div
`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, auto);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90%;
  max-width: 980px;
  height: auto;

  a
  {
    display: flex;
    margin: 1rem;
    padding: 2rem;
    color: white;

    .icons
    {
      color: white;
      transition: .3s;
    }

    .icons:hover
    {
      color: ${yellow};
    }
  }
    
  @media(max-width: 540px)
  {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
  }
`;

export const CopyrightContainer = styled.div
`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: auto;
  
  padding: 2.5rem 0;
  border-top: 1rem solid ${yellow};
  background: rgba(0,0,0,0.9);
  color: white;
  font-size: 2rem;
`