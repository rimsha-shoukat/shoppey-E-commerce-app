import './App.css';
import { useState, useEffect } from 'react';
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
import axios from "axios";


function App() {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/getproducts?limit=50&page=${page}`);
        setProducts(response.data.products);
        setTotal(response.data.total);
        setPage(response.data.page);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error} </div>;

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Landing user={user} setUser={setUser} />
            <Discount />
            <BestSeller Products={Products} />
            <Deal Products={Products} />
            <Product Products={Products} />
            <About />
            <Social />
          </>
        } />
        <Route path="/SignIU" element={
          <SignIU user={user} setUser={setUser} />
        } />
        <Route path="/AllProducts" element={
          <AllProducts Products={Products.products} user={user} setUser={setUser} />
        } />
        <Route path="/AllProducts/:param" element={
          <AllProducts Products={Products.products} user={user} setUser={setUser} />
        } />
        <Route path="/ProductDetail/:id" element={
          <ProductDetail Products={Products.products} user={user} setUser={setUser} />
        } />
        <Route path="/Cart" element={
          <Cart user={user} setUser={setUser} />
        } />
        <Route path="/Save" element={
          <Save user={user} setUser={setUser} />
        } />
      </Routes>
    </>
  )
}

export default App;
