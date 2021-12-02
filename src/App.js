import './App.css';
import  NavBar from './components/navbar/navbar';
import TitleComponent from './components/title/title'
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import {Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (

    <div className="App">
      
        <NavBar/>  
    
        <TitleComponent/>
      
      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path="item/:id" element={<ItemDetailContainer/>}/>       
        <Route path= "item/:category=/Fundas" element={<ItemListContainer/>}/>
        <Route path= "item/:category=/Cargadores" element={<ItemListContainer/>}/>   
        <Route path= "item/:category=/Templados" element={<ItemListContainer/>}/>   
        <Route path= "item/:category=/Accesorios" element={<ItemListContainer/>}/>  
        <Route path= "item/:category=/Auriculares" element={<ItemListContainer/>}/>   
 
   
      
      </Routes>

    </div>
  );

}

export default App;
