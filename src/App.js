import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Mainpage from './MainPage'
import SellPage from './SellPage'
import BuyPage from './BuyPage'


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
