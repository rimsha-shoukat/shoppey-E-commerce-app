import { useEffect, useState } from "react";
import { productsStore } from "../Store/productsStore.js";
 
export function GetProducts(loaderRef) {

const [pages, setPages] = useState(1);
const { products, fetchProducts, loading, total } = productsStore();
// intersection observer useEffect
  useEffect(() => {

    // observer
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !loading && products.length < total) {
        setPages(prev => prev + 1);
      }
    }, { threshold: 0 });

    //  call observer
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // clean up function
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };

  }, [loading]);

  // load products when page number changes
  useEffect(() => {
    fetchProducts(pages);
  }, [pages]);
}