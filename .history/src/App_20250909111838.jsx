import './App.css';
import { React, lazy, Suspense, useState, useEffect } from 'react';
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

function App(){
  const [Products, setProducts] = useState( [] );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')) || null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=42&select=title,price,discountPercentage,rating,category,availabilityStatus,thumbnail');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return(
    <>
     <Routes>
      <Route path="/" element={
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Landing user={user} setUser={setUser} />
            <Discount />
            <Collection Products={ Products.products } />
            <BestSeller Products={ Products.products } />
            <Deal Products={ Products.products } />
            <Product Products={ Products.products } />
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
              <AllProducts Products={ Products.products } />
            </Suspense>
          } />
      <Route path="/AllProducts/:param" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllProducts Products={Products.products} />
            </Suspense>
          } />
      <Route path="/ProductDetail/:id" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetail Products={ Products.products } />
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
