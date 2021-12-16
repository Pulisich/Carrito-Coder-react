import './App.css';
import TitleComponent from './components/title/title'
import { CartContextProvider } from './contexts/CartContext';
function Home() {

  return (

    <div className="App">
      
      <CartContextProvider>
      
        

        <TitleComponent />

      
      
      </CartContextProvider>
    
    </div>
  );

}

export default Home;
