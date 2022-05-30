import './App.css';
import MUNavbar from './components/MUNavbar';




function App() {
  const stylesNavBar = {
    backgroundColor : "black",
  }
  return (
    <div className='App' style={stylesNavBar}>
        <>
         <MUNavbar/> 
       </>
   </div>
  );
}

export default App;
