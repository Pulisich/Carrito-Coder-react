import './App.css';
import TitleComponent from './components/title/title'
import { CartProvider } from './contexts/CartContext';
function Home() {

  return (

    <div className="App">
      
      <CartProvider>
      
        

        <TitleComponent />

        <pre>
          Aquí habría más contenido.
          <br/>
          <br/>
          Más no tengo.
          <br/>
          <br/>
          Porque simplemente vendemos.
          <br/>
          <br/>
          Accesorios para tu teléfono.
        </pre>

      </CartProvider>
    
      <h1> ¡Novedades! </h1>
      <p>Tenemos fundas para el Iphone 13, dejen de preguntar</p>
      <p>También vendemos fundas SmartWatch</p>
      <p>Serán cargadas eventualmente en la sección de productos</p>
        
    </div>

    
  );

}

export default Home;
