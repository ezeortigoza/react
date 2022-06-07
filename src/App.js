import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import MUNavbar from './components/MUNavbar';





function App() {

  const onAdd = (count) =>{
    alert(`Sumaste ${count} productos`);    
  } 
  return (
    <div >
        <>
          <MUNavbar/> 
          <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>
           <ItemCount inicial= {1} max={10} onAdd={onAdd} />
       </>
   </div>  
     
     
   
  );
}

export default App;
