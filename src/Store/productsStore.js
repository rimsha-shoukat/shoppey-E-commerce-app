import { create } from "zustand";
import { getErrorMessage } from "../utils/getErrorMessage";
import axios from "../utils/axios";

export const productsStore = create((set, get) => ({
    products: [],
    loading: false,
    error: "",
    limit: 30,
    message: "",
    discounts: [],
    total: 0,
    fetchProducts: async (pages) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.get(`/products/getProducts?limit=${get().limit}&page=${pages}`);
            set({ products: [...get().products, ...response.data.products], loading: false, total: response.data.total });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    addNewProduct: async (newProduct) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`/products/addNewProduct`, { newProduct });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    deleteProduct: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.delete(`/products/deleteProduct?productId=${productId}`);
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateProduct: async (updatedProduct) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`/products/updateProduct`, { updatedProduct });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    setDiscount: async (thumbnail, category, discount) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`/products/setDiscount`, { thumbnail, category, discount });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    getDiscount: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.get(`/products/getDiscount`);
            set({ discounts: response.data.discounts, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    }
}));