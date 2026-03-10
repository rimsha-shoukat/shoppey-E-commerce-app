import { create } from "zustand";
import { getErrorMessage } from "../utils/getErrorMessage";
import axios from "../utils/axios";

export const productsStore = create((set, get) => ({
    products: [],
    loading: false,
    error: "",
    message: "",
    discounts: [],
    total: 0,
    fetchProducts: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.get(`/products/getProducts`);
            console.log(response);
            set({ products: response.data.products, loading: false, total: response.data.total });
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