import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Home'
import Productpage from './pages/Product'
import Cartpage from './pages/Cart'
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


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

      <Header />
      <Body />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="/cart" element={<Cartpage/>} />
      </Routes> */}
    </div>
  );
}

export default App;
