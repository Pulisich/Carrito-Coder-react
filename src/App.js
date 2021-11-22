import './App.css';
import  NavBar from './components/navbar/navbar';
import TitleComponent from './components/title/title'
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {

  return (
    <div className="App">
    <NavBar/>  
    <TitleComponent/>
    <ItemListContainer/>
    </div>
  );

}

export default App;
