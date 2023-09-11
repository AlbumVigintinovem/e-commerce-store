import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Sidebar from './components/Layout/Sidebar';

function App() {

  const showCart = useSelector(state => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <div className='row d-flex justify-content-center m-0'>
        <div className='col-md-3 d-flex justify-content-around' >
          <Sidebar />
        </div>
        <div className='col-md-9 d-flex justify-content-center'>
          <Products />
        </div>
      </div>

    </Layout>
  );
}

export default App;
