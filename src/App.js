import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import MUNavbar from './components/MUNavbar';
import Item from './components/Item'
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {

  const onAdd = (count) =>{
    alert(`Sumaste ${count} productos`);    
  } 
  return (
   <div >
          <MUNavbar/> 
          {/*  <ItemCount inicial= {1} max={10} onAdd={onAdd} /> */}
          <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>
          <ItemDetailContainer/>
       
   </div> 
  
     
     
   
  );
}

export default App;
