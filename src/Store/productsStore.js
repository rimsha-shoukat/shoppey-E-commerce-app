import { create } from "zustand";
import axios from "axios";

const URL = "http://localhost:5000/api/products";

export const productsStore = create((set, get) => ({
    products: [],
    loading: false,
    error: "",
    page: 1,
    total: 0,
    message: "",
    discounts: [],
    fetchProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${URL}/getProducts?limit=20&page=${page}`);
            set({ products: response.data.products, loading: false, page: response.data.page, total: response.data.total });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    addNewProduct: async (newProduct) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/addNewProduct`, { newProduct });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    deleteProduct: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.delete(`${URL}/deleteProduct${productId}`);
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateProduct: async (updatedProduct) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/updatedProduct`, { updatedProduct });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    setDiscount: async (thumbnail, category, discount) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/setDiscount`, { thumbnail, category, discount });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    getDiscount: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${URL}/getDiscount`);
            set({ discounts: response.data.discounts, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));