import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Discount from './components/Discount.jsx';
import BestSeller from './components/BestSeller.jsx';
import Product from './components/Product.jsx';
import Social from './components/Social.jsx';
import SignIU from './pages/SignIU.jsx';
import AllProducts from './pages/AllProducts.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Save from './pages/Save.jsx';
import User from "./pages/User.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            {/* <Discount /> */}
            {/* <BestSeller /> */}
            {/* <Product /> */}
            {/* <About /> */}
            {/* <Social /> */}
          </>
        } />
        <Route path="/User" element={
          <User />
        } />
        <Route path="/SignIU" element={
          <SignIU />
        } />
        {/* <Route path="/AllProducts" element={
          <AllProducts />
        } /> */}
        {/* <Route path="/AllProducts/:param" element={
          <AllProducts />
        } /> */}
        {/* <Route path="/ProductDetail/:id" element={
          <ProductDetail />
        } /> */}
        {/* <Route path="/Cart" element={
          <Cart />
        } /> */}
        {/* <Route path="/Save" element={
          <Save />
        } /> */}
      </Routes>
    </>
  )
}

export default App;
