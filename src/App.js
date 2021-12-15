import './App.css';
import  NavBar from './components/navbar/navbar';
import TitleComponent from './components/title/title'
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import {Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './contexts/CartContext';
function App() {

  return (

    <div className="App">
      
      <CartContextProvider>
      
        <NavBar />

        <TitleComponent />

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          {/* //Acá le pasamos los Params a usar para cada ruta, 
         como cada item en el array tiene un parámetro distinto podemos
          usar dichos parámetros para filtrarlos combinando useParams con filter.
          Por ejemplo, si el item tiene de id: 4, el link item/4 me llevará al detail con ese item */}



        </Routes>
      
      </CartContextProvider>
    
    </div>
  );

}

export default App;
