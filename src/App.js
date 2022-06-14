import './App.css';
import ItemListContainer from './components/ItemListContainer';
import MUNavbar from './components/MUNavbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";





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
                  <Route path= '/' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/productos' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/relojes' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/notebooks' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/celulares' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/accesorios' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/productos/:id' element= { <ItemDetailContainer/>} ></Route>

                </Routes>
                <ItemDetailContainer/>
            </BrowserRouter>
            
          </>
       
   </div> 
  
     
     
   
  );
}

export default App;
