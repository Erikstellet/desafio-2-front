import styled from 'styled-components';
import colors from './pallet';

const { yellow, blue } = colors;

export const CartContainer = styled.div
`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 5fr 3fr;
  align-items: start;
  min-height: 100vh;
  width: 90%;
  max-width: 980px;
  margin: 20px auto;
  gap: 0 20px;

  @media(max-width: 960px)
  {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const FormContainer = styled.form
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
  min-width: 100%;

  .labels
  {
    background: #fff;
    border-radius: 5px;
    width: 100%; 
    margin: 1.6px 0;

    .firula
    {
      border-radius: 5px 5px 0 0;
      padding-bottom:10px;
      height: 40px;
      width: 100%;
      background: ${blue};
    }

    label
    {
      box-sizing: border-box;
      display: block;
      margin: 10px;
      color: ${blue};
      font-size: 2rem;
    }
    
    input
    {
      width: 100%; 
      font-size: 1.5rem;
      border: 2px solid ${blue};
      border-radius: 5px;
      background: #fff;
      padding: 0 5px;
    }

    span
    {
      font-size: 2rem;
    }
  }

  .total
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; 
    background: #fff;
    border-radius: 5px;

    span:first-child
    {
      margin: 5px 20px;
      font-size: 2.5rem;
      color: ${blue};
    }

    span:last-child
    {
      margin: 5px 20px;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }

  @media(max-width: 960px)
  {
    margin-top: 15px;
  }
`;

export const ButtonContainer = styled.button
`
  width: 100%;
  margin: 5px;
  font-size: 12px;
  padding: 5px 0;
  
  background-color: ${blue};
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 2rem;

  transition: all .3s ease-in-out;
  cursor: pointer; 
 
  &:hover
  {
    filter: brightness(115%);
  }
`

export const Title = styled.tr
`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 2fr;
  padding: 10px; 
  font-size: 2rem;
  background: ${blue};
  border-radius: 5px 5px 0 0;

  td
  {
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ItemsContainer = styled.tbody
`
  box-sizing: border-box;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;

  .itens
  {
    font-size: 2rem;
  }
`

export const ItemCard = styled.tr
`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 2fr;
  padding: 10px 10px;
  background-color: white;
  border-bottom: 2px solid #ebebec;
  transition: all .2s ease-in-out;
  
  td:first-child
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span
    {
      text-align: center;
      margin: 5px;
      font-size: 1.3rem;
      color: ${yellow};
    }

    img
    {
      align-self: center;
      margin: 10px;
      height: 80px;
    }

    @media(max-width: 540px)
    {
      span
      {
        font-size: 1.15rem;
      }
    }
  }

  td
  {
    display: flex;
    justify-content: center;
    align-items: center;

    span
    {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${blue};
    }

    .icons
    {
      cursor: pointer; 
      border: none;
      transition: all .3s ease-in-out;
    }

    .icons:hover
    {
      transform: scale(1.10);
    }
    
    .trash
    {
      margin-top: 5px;
      font-size: 1rem;
      font-weight: none;
    }
  }

  td:last-child
  {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    span
    {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5px;
      text-align: start;
      font-size: 2rem;
      color: ${yellow};
    }

    .icons
    {
      margin: 0 10px;
      color: ${blue};
      cursor: pointer; 
      border: none;
      transition: all .3s ease-in-out;
    }

    .icons:hover
    {
      transform: scale(1.10);
    }

    @media(max-width: 540px)
    {
      display: flex;
      flex-direction: column;
    }
  }
`
