import { create } from "zustand";
import axios from "axios";

const URL = "http://localhost:5000/api/user";

export const userStore = create((set, get) => ({
    user: [],
    message: "",
    loading: true,
    error: "",
    fetchUser: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`${URL}/profile`);
            set({ user: response.data.user, setLoading: false });
        } catch (error) {
            set({ error: error.message, setLoading: false });
        }
    },
    signin: async (user) => {
        set({ loading: true });
        try {
            const response = await axios.post(`${URL}/signin`, { email: user.email, password: user.password });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    signup: async (user) => {
        set({ loading: true });
        try {
            const response = await axios.post(`${URL}/signup`, { name: user.name, email: user.email, password: user.password });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    logout: async () => {
        set({ loading: true });
        try {
            const response = await axios.post(`${URL}/profile/logout`);
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    deleteAccount: async () => {
        set({ loading: true });
        try {
            const response = await axios.delete(`${URL}/profile/deleteAccount`);
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateName: async (newName) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateName`, { newName });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateImage: async (newImage) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateImage`, { newImage });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateEmail: async (newEmail) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateEmail`, { newEmail });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updatePassword: async (currentPassword, newPassword) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updatePassword`, { currentPassword, newPassword });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateSaved: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateSaved`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    removeSaved: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/removeSaved`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateCart: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateCart`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    removeCart: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/removeCart`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateLocation: async (location) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateLocation`, { location });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateNumber: async (number) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateNumber`, { number });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    updateRank: async (rank) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/updateRank`, { rank });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    addCoupons: async (coupons) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/addCoupons`, { coupons });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    removeCoupons: async (coupons) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`${URL}/profile/removeCoupons`, { coupons });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));