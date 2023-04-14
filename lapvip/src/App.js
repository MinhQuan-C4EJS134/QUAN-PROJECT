import {Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Home' 
import Productpage from './pages/Product'
import Cartpage from './pages/Cart'
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';

function App() {
  return (
    <div  >
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        
        </a>
       
      <div><Header/></div>
      <div><Body/></div>
      <div><Footer/></div>

      {/* <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="/cart" element={<Cartpage/>} />
      </Routes> */}
    </div>
  );
}

export default App;
