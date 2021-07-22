import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import Catalogo from './pages/catalogo';
import Cart from './pages/cart';
import { NotFound404 } from './pages/notFound404';

import { Wrapper } from './styles/global-styles';
import { CartProviderProvider } from './contexts/cart-provider';

function App()
{
  return (
  <>
    <Router>
      <CartProviderProvider>
      <Header />
      <Wrapper>
        <Switch>
          <Route path="/" component={ Catalogo } exact/>
          <Route path="/carrinho" component={ Cart }/>
          <Route path="*" component={ NotFound404 } />
        </Switch>
      </Wrapper>
      
      <Footer />
      </CartProviderProvider>
    </Router>
  </>
  );
}

export default App;
