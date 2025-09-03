import './App.css';
import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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

const [Products]

function App(){
  return(
    <>
     <Routes>
      <Route path="/" element={
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Landing />
            <Discount />
            <Collection Products={ Products } />
            <BestSeller Products={ Products } />
            <Deal Products={ Products } />
            <Product Products={ Products } />
            <About />
            <Social />
          </Suspense>
        </>
      } />
      <Route path="/SignIU" element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignIU />
            </Suspense>
          } />
      <Route path="/AllProducts" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllProducts Products={Products} />
            </Suspense>
          } />
      <Route path="/AllProducts/:param" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllProducts Products={Products} />
            </Suspense>
          } />
      <Route path="/ProductDetail/:id" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetail Products={ Products } />
            </Suspense>
          } />
      <Route path="/Cart" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          } />
      <Route path="/Save" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Save />
            </Suspense>
          } />
     </Routes>
    </>
  )
}

export default App;
