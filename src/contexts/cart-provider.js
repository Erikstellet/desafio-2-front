import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartProviderProvider({children})
{
  const [ cart, setCart ] = useState({});

  useEffect(() => 
  {
    const cartLocal = window.localStorage.getItem('cart');

    if(cartLocal)
    {
      setCart(JSON.parse(cartLocal))
    }
  }, [])

  const addToCart = (product) =>
  {
    setCart((old) => {
    let quantity = 0;

    if(old[product.id])
    {
      quantity = old[product.id].quantity
    }

    const newCart = 
    {
        ...old,
        [product.id]: {
        quantity: quantity + 1,
        product
      },
    }

    window.localStorage.setItem('cart', JSON.stringify(newCart)); 
    return newCart
    })
  }

  const removeToCart = (productId) =>
  {
    setCart((old) =>
    {
      const newCart = {};

      Object.keys(old).forEach((id)=> 
      {
        if(id !== productId)
        {
          newCart[id] = old[id]
        }
      })

      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart
    })
  }

  const changeQuantity = (productId, newQuantity) =>
  {
    setCart((old) =>
    {
      const newCart = {};

      Object.keys(old).forEach((id)=> 
      {
        const newProduct = {...old[id]};

        if(id === productId)
        {
          newProduct.quantity = newQuantity
        }

        newCart[id] = newProduct;
      })

      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart
    })
  }

  const clearCart = () =>
  {
    const newCart = []

    setCart(newCart);
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <CartContext.Provider value=
    {{
       cart, addToCart, removeToCart, changeQuantity, clearCart
    }}>
      { children }
    </CartContext.Provider>  
  )
}