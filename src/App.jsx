import './App.css';
import { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Discount from './components/Discount.jsx';
import BestSeller from './components/BestSeller.jsx';
import Deal from './components/Deal.jsx';
import Product from './components/Product.jsx';
import Social from './components/Social.jsx';
import SignIU from './components/SignIU.jsx';
import AllProducts from './components/AllProducts.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Save from './components/Save.jsx';


function App() {
  const [Products, setProducts] = useState([]);
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
  if (error) return <div>Error: {error} </div>;

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <Landing user={user} setUser={setUser} />
              <Discount />
              <BestSeller Products={Products.products} />
              <Deal Products={Products.products} />
              <Product Products={Products.products} />
              <About />
              <Social />
            </Suspense>
          </>
        } />
        <Route path="/SignIU" element={
          <Suspense fallback={<div>Loading...</div>}>
            <SignIU user={user} setUser={setUser} />
          </Suspense>
        } />
        <Route path="/AllProducts" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AllProducts Products={Products.products} user={user} setUser={setUser} />
          </Suspense>
        } />
        <Route path="/AllProducts/:param" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AllProducts Products={Products.products} user={user} setUser={setUser} />
          </Suspense>
        } />
        <Route path="/ProductDetail/:id" element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail Products={Products.products} user={user} setUser={setUser} />
          </Suspense>
        } />
        <Route path="/Cart" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart user={user} setUser={setUser} />
          </Suspense>
        } />
        <Route path="/Save" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Save user={user} setUser={setUser} />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default App;
