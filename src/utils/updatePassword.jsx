import { useState } from "react";
import { userStore } from "../Store/userStore.js";
import { validatePassword } from "./validateFields.js";

export const UpdatePassword = ({ onClose }) => {
    const { updatePassword } = userStore();
    const [form, setForm] = useState({ oldPassword: "", newPassword: "" });
    const [errorMessage, setErrorMessage] = useState(null);

    const handleForm = async () => {
        setErrorMessage(null);
        if (form.oldPassword === form.newPassword) {
            setErrorMessage("New password must be different from old.");
            return;
        }
        let password = form.newPassword;
        if (validatePassword({ password, setErrorMessage })) {
            await updatePassword({ oldPassword: form.oldPassword, newPassword: form.newPassword });
            const storeError = userStore.getState().error;
            if (storeError) {
                setErrorMessage(storeError);
            } else {
                onClose();
            }
        }

    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 flex flex-col gap-5">

                {/* Header */}
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Update Password</h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Please confirm your credentials.
                    </p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <label className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">
                        Old Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your old password"
                        value={form.oldPassword}
                        onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
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
                        placeholder="Enter your new password"
                        value={form.newPassword}
                        onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-red-400 transition-colors"
                    />
                </div>
                {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                        onClick={() => onClose()}
                        className="cursor-default py-2.5 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-all duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleForm}
                        disabled={!form.oldPassword || !form.newPassword}
                        className="cursor-default py-2.5 rounded-xl text-sm font-bold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 disabled:opacity-40"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};