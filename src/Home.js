import './App.css';
import TitleComponent from './components/title/title'
import { CartProvider } from './contexts/CartContext';
function Home() {

  return (

    <div className="App">
      
      <CartProvider>
      
        

        <TitleComponent />

      
      
      </CartProvider>
    
    </div>
  );

}

export default Home;
