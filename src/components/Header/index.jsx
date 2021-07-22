import { Container, LogoContainer, SocialContainer, NavContainer } from './styles';
import { FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { useCart } from '../../hooks/useCart';
const logo = "https://i0.wp.com/fazerfestas.com/wp-content/uploads/2017/01/Minions-Logo-3D-2.png?fit=1000%2C159&ssl=1";
const a = "https://twitter.com/twitter";

export function Header()
{
  const
  {  
    cart
  } = useCart();

  const itemsCount = Object.keys(cart).length;

  return (
  <Container>
    <SocialContainer>
      <a href={a}> <FaFacebookF className="items" size={26}/> </a>
      <a href={a}> <FaInstagram className="items" size={30}/> </a>
      <a href={a}> <FaTwitter className="items" size={30}/> </a>
    </SocialContainer>

    <LogoContainer>
      <NavLink to="/">
      <img src={logo} alt="logo" />
      </NavLink>
    </LogoContainer>

    <NavContainer>
      <NavLink to="/">
        <span className="items"> Catálago </span>
      </NavLink>
      <NavLink className="number-items" to="/carrinho">
        <FaShoppingCart size={32}/>
        <span style={{marginLeft: "5px", marginBottom: "5px"}}>{itemsCount}</span>
      </NavLink>
    </NavContainer>
  </Container>
  )
}