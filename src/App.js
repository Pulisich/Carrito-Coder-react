import './App.css';
import  NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import {Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart/Cart';
import Home from './Home';


function App() {


  return (

    <div className="App">

      <CartProvider>

        <NavBar />


        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          {/* //Acá le pasamos los Params a usar para cada ruta,
         como cada item en el array tiene un parámetro distinto podemos
          usar dichos parámetros para filtrarlos combinando useParams con filter.
          Por ejemplo, si el item tiene de id: 4, el link item/4 me llevará al detail con ese item */}
          <Route path="/cart" element={<Cart/>} />
          <Route path="/home" element={<Home/>} />




        </Routes>

      </CartProvider>

    </div>
  );

}

export default App;
