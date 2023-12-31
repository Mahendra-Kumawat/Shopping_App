import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/Cart'

function App() {
  return (
    <div>
      <div className="bg-slate-900 py-3">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/Shopping_App" element={<Home />} />
          <Route path="/Shopping_App/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
