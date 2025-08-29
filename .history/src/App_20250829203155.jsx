import './App.css';
import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Landing from './components/Landing.jsx'
// import Discount from "./components/Discount.jsx"
// import Collection from "./components/newCollection.jsx"
// import BestSeller from "./components/BestSeller.jsx"
// import Deal from "./components/Deal.jsx"
// import Product from "./components/Product.jsx"
// import About from "./components/About.jsx"
// import Social from "./components/Social.jsx"
// import SignIU from "./components/SignIU.jsx"
// import AllProducts from "./components/AllProducts.jsx"
// import ProductDetail from "./components/ProductDetail.jsx"
// import Cart from "./components/Cart.jsx"
// import Save from "./components/Save.jsx"

// Lazy load components
const Landing = lazy(() => import('./components/Landing.jsx'));
const Discount = lazy(() => import('./components/Discount.jsx'));
const Collection = lazy(() => import('./components/newCollection.jsx'));
const BestSeller = lazy(() => import('./components/BestSeller.jsx'));
const Deal = lazy(() => import('./components/Deal.jsx'));
const Product = lazy(() => import('./components/Product.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Social = lazy(() => import('./components/Social.jsx'));
const SignIU = lazy(() => import('./components/SignIU.jsx'));
const AllProducts = lazy(() => import('./components/AllProducts.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));
const Save = lazy(() => import('./components/Save.jsx'));

function App(){
  return(
    <>
     <Routes>
      <Route path="/" element={
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Landing />
          </Suspense>
          <Discount />
          <Collection />
          <BestSeller />
          <Deal />
          <Product />
          <About />
          <Social />
        </>
      } />
      <Route path="/SignIU" element={<SignIU />} />
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/AllProducts/:param" element={<AllProducts />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Save" element={<Save />} />
     </Routes>
    </>
  )
}

export default App;
