import styled from 'styled-components';
import colors from '../../styles/pallet';

const { gray500, yellow, blue} = colors;

export const Container = styled.main
`
  box-sizing: border-box;
  height: auto;
  width: 90%;
  max-width: 980px;
  margin: 10px auto;
`

export const Posts = styled.div
`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 3fr));
  height: auto;
  gap: 10px;
  margin: 12px 0;

  a
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const Post = styled.div
`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  padding: 8px;

  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: all .2s ease-in-out;

  img
  {
    margin: 10px;
    height: 100px;
  }

  h2
  {
    text-align: center;
    margin: 5px;
    font-size: 14px;
    color: ${yellow};
    transition: all .2s ease-in-out;
  }

  span
  {
    text-align: center;
    margin: 5px;
    font-size: 10px;
    color: ${gray500};
  }

  span:nth-child(2n)
  {
    text-align: start;
    font-size: 12px;
    font-weight: bold;
    color: ${yellow};
  }
  
  button span
  {
    display: inline-block;
    position: relative;
    color: white;
    font-size: 12px;
    transition: all .3s ease-in-out;
  }
  
  button span:after
  {
    content: "🛒";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: all .3s ease-in-out;
  }
  
  button:hover span
  {
    padding-right: 25px;
  }
  
  button:hover span:after
  {
    opacity: 1;
    right: 0;
  }
`

export const Button = styled.button
`
  padding: 5px 0;
  width: 100%;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${blue};
  border: none;
  cursor: pointer;
`

