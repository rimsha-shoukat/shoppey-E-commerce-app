import { create } from "zustand";
import axios from "../utils/axios.js";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export const userStore = create((set, get) => ({
    user: null,
    message: "",
    loading: false,
    error: "",
    fetchUser: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.get(`user/profile`);
            set({ user: response.data.user, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    signin: async ({ form }) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.post(`user/signin`, { email: form.email, password: form.password });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    signup: async ({ form }) => {
        set({ loading: true, error: "", message: "" });
        try {
            console.log(form.name, form.email, form.password);
            const response = await axios.post(`user/signup`, { name: form.name, email: form.email, password: form.password });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    logout: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.post(`user/profile/logout`);
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    deleteAccount: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.delete(`user/profile/deleteAccount`);
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateName: async (newName) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateName`, { newName });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateImage: async (newImage) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateImage`, { newImage });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateEmail: async (newEmail) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateEmail`, { newEmail });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updatePassword: async (currentPassword, newPassword) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updatePassword`, { currentPassword, newPassword });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateSaved: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateSaved`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    removeSaved: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/removeSaved`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateCart: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateCart`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    removeCart: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/removeCart`, { productId });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateLocation: async (location) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateLocation`, { location });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateNumber: async (number) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateNumber`, { number });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateRank: async (rank) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateRank`, { rank });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    addCoupons: async (coupons) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/addCoupons`, { coupons });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    removeCoupons: async (coupons) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/removeCoupons`, { coupons });
            set({ message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
}));