import styled from 'styled-components';
import colors from '../../styles/pallet';

const { gray100, yellow, blue } = colors;

export const Container = styled.header
` 
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${blue};
  font-size: 2rem;
  border-top: 1rem solid ${yellow};
  border-bottom: 1rem solid ${yellow};

  .items
  {
    margin: 0 5px;
    color: ${gray100};
    transition: 0.3s;
  }

  .items:hover
  {
    color: ${yellow};
  }
`

export const LogoContainer = styled.div
`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img
  {
    width: 30rem;
    height: auto;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div
`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 20px 2rem;
`;

export const NavContainer = styled.div
`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 980px;
  padding: 0 2rem;
  font-size: 6rem;
  font-weight: bold;
  transition: all .3s ease-in-out;

  .number-items
  {
    color: ${gray100};
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    transition: all .3s ease-in-out;
  }

  .number-items:hover
  {
    color: ${yellow};
  }
`;

