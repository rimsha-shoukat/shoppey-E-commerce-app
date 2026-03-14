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
    comments: [],
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
    getComment: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.get(`/comment/getComment`);
            set({ comments: response.data.comments, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    addComment: async (comment, productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`/comment/addComment`, { comment, productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    editComment: async (comment, productId, commentId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`/comment/editComment`, { comment, commentId, productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    deleteComment: async (productId, commentId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`/comment/deleteComment`, { commentId, productId });
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