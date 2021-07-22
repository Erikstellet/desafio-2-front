import { Link } from 'react-router-dom';
import { Button, Container, Post, Posts } from './styles';

import items from '../../mocks/itens';
import { useCart } from '../../hooks/useCart';

export function Catalog()
{
  const { addToCart } = useCart();

  return (
  <Container>
    <Posts>
    {
      items.map((item) =>
      {
        return ( 
        <Post key={item.id}>
          <img src={item.url} alt={item.title}/>
          <h2>{item.title}</h2>
          <span>{item.description}</span>
          <span>{item.price}</span>
          
          <Link to="/carrinho"> <Button onClick={() => addToCart(item)}>
            <span> Reservar </span>
          </Button> </Link>

          <Button onClick={() => addToCart(item)}>
            <span> Adicionar </span>
          </Button>
        </Post>
        )
      })
    }
    </Posts>
  </Container>
  )
}

