import { Container, CopyrightContainer, SubContainer } from './styles';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const a = "https://twitter.com/twitter";

export function Footer()
{
  return (
  <Container>
    <SubContainer>
      <a href={a}> <FaFacebookF size={40} className="icons"/> </a>
      <a href={a}> <FaInstagram size={40} className="icons"/> </a>
      <a href={a}> <FaTwitter size={40} className="icons"/> </a>
    </SubContainer>

    <CopyrightContainer>
      <p>Copyright © 2021 STL. All Rights Reserved</p>
    </CopyrightContainer>
  </Container>
  );
}