import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import { MainNavigation } from './components/MainNavigation';
import PriceList from './pages/PriceList';
import OrderList from './pages/OrderList';

const App = () => {

    return (
      <BrowserRouter>
        <MainNavigation>
          <Routes>
            <Route path="/" element={<Navigate to='/prices' />} />
            <Route path="/prices" element={<PriceList />} />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </MainNavigation>
      </BrowserRouter>
    );
}


export default App;