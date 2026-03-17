import { create } from "zustand";
import axios from "../utils/axios.js";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export const userStore = create((set, get) => ({
    user: [],
    message: "",
    loading: false,
    error: "",
    cartDiscount: 0,
    fetchUser: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.get(`user/profile`);
            const userData = response.data.user || null;
            set({ user: userData, loading: false });
        } catch (error) {
            if (error?.response?.status === 401 || error?.response?.status === 404) {
                set({ user: null, error: "", loading: false });
            } else {
                set({ error: getErrorMessage(error), loading: false });
            }
        }
    },
    signin: async ({ form }) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.post(`user/signin`, { email: form.email, password: form.password });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
            return true;
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
            return false;
        }
    },
    signup: async ({ form }) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.post(`user/signup`, { name: form.name, email: form.email, password: form.password });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
            return true;
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
            return false;
        }
    },
    logout: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.post(`user/profile/logout`);
            set({ user: null, message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    deleteAccount: async ({ email, password }) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/deleteAccount`, { email, password });
            set({ user: null, message: response.data.message, loading: false });
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateName: async (newName) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateName`, { newName });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateImage: async (newImage) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateImage`, { newImage });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateEmail: async (newEmail) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateEmail`, { newEmail });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updatePassword: async ({ oldPassword, newPassword }) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updatePassword`, { oldPassword, newPassword });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateSave: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateSaved`, productId);
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    removeSaved: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/removeSaved`);
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateCart: async (size, quantity, productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateCart`, { size, quantity, productId });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    removeCart: async (productId) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/removeCart`, productId);
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateLocation: async (location) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateLocation`, { location });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateNumber: async (number) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateNumber`, { number });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateRank: async (rank) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/updateRank`, { rank });
            set({ message: response.data.message, loading: false })
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    removeCoupons: async (coupons) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/removeCoupons`, { coupons });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    setItemQuantity: async (itemId, quantity) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/setItemQuantity`, { itemId, quantity });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    clearCart: async () => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`user/profile/clearCart`);
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },

    addOrder: async (order) => {
        set({ loading: true, error: "", message: "" });
        try {
            const response = await axios.patch(`order/placeOrder`, { order });
            set({ message: response.data.message, loading: false });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error), loading: false });
        }
    },
    updateOrderStatus: async (orderId, status) => {
        console.log(orderId, status);
        try {
            await axios.patch(`/order/updateOrder`, { orderId, status });
            await get().fetchUser();
        } catch (error) {
            set({ error: getErrorMessage(error) });
        }
    },
    setCartDiscount: (amount) => set({ cartDiscount: amount }),
    clearCartDiscount: () => set({ cartDiscount: 0 }),
}));