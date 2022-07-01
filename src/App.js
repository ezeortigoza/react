import './App.css';
import ItemListContainer from './components/ItemListContainer';
import MUNavbar from './components/MUNavbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import {  createContext, useState } from 'react';
import Cart from './components/Cart';
import {  CartProvider } from './components/context/CartContext';




 export const miContexto = createContext({}); 


function App() {

  return (
   <div >
          
          
          <>  
           <CartProvider>
            <BrowserRouter>
                <MUNavbar/> 
                <Routes>
                  <Route path= '/home' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/productos' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/relojes' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/cart' element= { <Cart/>}></Route>
                  <Route path= '/categoria/:id' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:cel' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:reloj' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:carga' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/categoria/:ipad' element= { <ItemListContainer saludar={"Hola Fran bienvenido al e-commerce :)"}/>}></Route>
                  <Route path= '/detalle/:id' element= { <ItemDetailContainer/>} ></Route>
                </Routes>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
      
                <Footer/>
            </BrowserRouter>
            </CartProvider>
          </>
       
   </div> 
  
     
     
   
  );
}

export default App;
