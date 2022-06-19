import './App.css';
import ItemListContainer from './components/ItemListContainer';
import MUNavbar from './components/MUNavbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';





function App() {

  const onAdd = (count) =>{
    alert(`Sumaste ${count} productos`);    
  } 
  return (
   <div >
          
          
          <>  
            <BrowserRouter>
                <MUNavbar/> 
                <Routes>
                  <Route path= '/home' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/productos' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/relojes' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:id' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:cel' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:reloj' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:carga' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/detalle/:id' element= { <ItemDetailContainer/>} ></Route>
                </Routes>
                <Footer/>
                   
            </BrowserRouter>
            
          </>
       
   </div> 
  
     
     
   
  );
}

export default App;
