import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './components/context/CartContext';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import MUNavbar from './components/MUNavbar';




 export const miContexto = createContext({}); 


function App() {

  return (
   <div >
          
          
          <>  
      
           <CartProvider>
            <BrowserRouter>
                <MUNavbar/> 
                <Routes>
                  <Route path= '/home' element= { <ItemListContainer/>}></Route>
                  <Route path= '/productos' element= { <ItemListContainer/>}></Route>
                  <Route path= '/relojes' element= { <ItemListContainer/>}></Route>
                  <Route path= '/cart' element= { <Cart/>}></Route>
                  <Route path= '/categoria/:id' element= { <ItemListContainer/>}></Route>
                  <Route path= '/categoria/:cel' element= { <ItemListContainer/>}></Route>
                  <Route path= '/categoria/:reloj' element= { <ItemListContainer/>}></Route>
                  <Route path= '/categoria/:carga' element= { <ItemListContainer/>}></Route>
                  <Route path= '/categoria/:ipad' element= { <ItemListContainer/>}></Route>
                  <Route path= '/detalle/:id' element= { <ItemDetailContainer/>} ></Route>
                  <Route path= '/checkout' element= {<Checkout/>} ></Route>
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
