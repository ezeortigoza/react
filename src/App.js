import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ListadoContainer from './components/ListadoContainer';
import MUNavbar from './components/MUNavbar';
import Saludar from './components/Saludar';




function App() {
  const stylesNavBar = {
    backgroundColor : "yellow",
    marginleft: "60%",
  }
  function hacerUnAlert (){
    alert("Hola mundo");
  }
  return (
    <div className='App' style={stylesNavBar}>
        <>
          <MUNavbar/> 
          <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>
      {/*    <ListadoContainer/>
         <Saludar quien={"Eze Ortigoza"} msg= {"Crack"} hacerUnAlert={hacerUnAlert}/> */}
         
       </>
   </div>  
     
     
   
  );
}

export default App;
