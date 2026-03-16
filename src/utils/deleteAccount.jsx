import { useState } from "react";
import { userStore } from "../Store/userStore.js";
import { useNavigate } from "react-router-dom";

export const DeleteAccount = ({ onClose }) => {
    const { deleteAccount } = userStore();
    const navigate = useNavigate();
    const [deleteForm, setDeleteForm] = useState({ email: "", password: "" });

    const handleDelete = async () => {
        await deleteAccount({ email: deleteForm.email, password: deleteForm.password });
        navigate("/");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 flex flex-col gap-5">

                {/* Header */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Delete Account</h2>
                    <p className="text-sm text-gray-400 mt-1">
                        This action is permanent. Please confirm your credentials.
                    </p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <label className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={deleteForm.email}
                        onChange={(e) => setDeleteForm({ ...deleteForm, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-red-400 transition-colors"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={deleteForm.password}
                        onChange={(e) => setDeleteForm({ ...deleteForm, password: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-red-400 transition-colors"
                    />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                        onClick={() => onClose()}
                        className="cursor-default py-2.5 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={!deleteForm.email || !deleteForm.password}
                        className="cursor-default py-2.5 rounded-xl text-sm font-bold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 disabled:opacity-40"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};