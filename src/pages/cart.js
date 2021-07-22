import { useState } from "react";
import axios from 'axios';
import { AiFillPlusCircle, AiFillMinusCircle, AiTwotoneDelete } from "react-icons/ai";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCart } from '../hooks/useCart';
import { CartContainer, ItemsContainer, FormContainer, ButtonContainer, ItemCard, Title } from "../styles/cart";

export default function Cart()
{
  const { cart, clearCart, removeToCart, changeQuantity } = useCart();

  const [ reserve, setReserve ] = useState({ userName: '', email: '' });
  const [ productsFinal, setProductsFinal ] = useState([]);

  let value = 0;

  const remove = id => () =>
  {
    removeToCart(id);
  }

  const change = (key, quantity) => () => 
  {
    if(quantity <= 0)
    {
      removeToCart(key);
    }

    changeQuantity(key, quantity)
  }

  function handleInputChange(e)
  {
    const { name, value } = e.target;
    setReserve({...reserve, [name]: value});
  }

  function handleReserve(e)
  {
    e.preventDefault();

    if(cart.length === 0)
    {
      setReserve({ userName: '', email: '' });
      toast.error("Seu carrinho está vazio 🛒")
      return;
    }

    // Envia o email usando uma conta Outlook(retorna 502 no client, mas envia o e-mail) 
    axios.post("--- URL DO SERVIÇO DE EMAIL ---", 
    {
      userName: reserve.userName,
      email: reserve.email,
      total: value,
      cart: cart,
    },
    {
      headers:{"Content-Type" : "application/json"}
    });

    // Salva as informaçoes do e-mail no DynamoDB 
    axios.post("--- URL DO SERVIÇO DO DYNAMODB---", 
    {
      userName: reserve.userName,
      email: reserve.email,
      total: value,
    });

    toast.success("Verifique seu e-mail")

    clearCart()
    setReserve({ userName: '', email: '' });
    setProductsFinal([]);
  }

  return(
  <CartContainer>

    <table>
      <thead>
        <Title>
          <td>Item</td>
          <td>Preço</td>
          <td>Remover</td>
          <td>Quantidade</td>
        </Title>
      </thead>

      <ItemsContainer>
      {
        Object.keys(cart).map((key) => 
        {
          const { quantity, product } = cart[key]
          
          value = value + (product.price * quantity) 
          
          return ( <ItemCard key={key}>
                     <td>
                       <img src={product.url} alt="abc"/>
                       <span>{product.title}</span>
                     </td>
                     <td>
                       <span>{product.price}</span>
                     </td>
                     <td>
                       <AiTwotoneDelete className="icons" size="26" onClick={remove(key)}/>
                     </td>
                     <td>
                       <AiFillMinusCircle className="icons" size="26" onClick={change(key, quantity - 1)}/> 
                       <span>{quantity}</span>
                       <AiFillPlusCircle className="icons" size="26" onClick={change(key, quantity + 1)}/>
                     </td>
                   </ItemCard>        
        )})
      }
      </ItemsContainer>
    </table>

    <FormContainer onSubmit={handleReserve}>
      <div className="labels">
        <div className="firula" />

        <label> 
          Nome <input type="text" value={reserve.userName} required
                      name="userName" onChange={handleInputChange} placeholder="Seu nome"/>
        </label>

        <label> 
          Email <input type="email" value={reserve.email} required
                       name="email" onChange={handleInputChange} placeholder="Email de contato"/>
        </label> 
      </div>

      <div className="total">
        <span>Total&nbsp;</span>
        <span>R${ value = value.toFixed(2)}</span>
      </div>

      <ButtonContainer type="submit"> Reservar </ButtonContainer>
    </FormContainer>
  </CartContainer>
  )
}