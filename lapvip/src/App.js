import {Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Home'
import Productpage from './pages/Product'
import Cartpage from './pages/Cart'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="/cart" element={<Cartpage/>} />
      </Routes>
    </div>
  );
}

export default App;
