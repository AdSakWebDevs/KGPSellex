import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Mainpage from './MainPage'
import SellPage from './SellPage'
import BuyPage from './BuyPage'
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/sell' element={<SellPage />} />
          <Route path='/buy' element={<BuyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
