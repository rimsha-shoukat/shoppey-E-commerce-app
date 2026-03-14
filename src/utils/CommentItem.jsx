import { timeAgo } from "./timeAgo.js";
import { useState } from "react";

export const CommentItem = ({ c, currentUserId, onEdit, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(c.text);
    const [showActions, setShowActions] = useState(false);
    const isOwner = currentUserId && c.user?._id == currentUserId;

    const handleClick = () => {
        if (!isOwner) return;
        setShowActions((prev) => !prev);
    };

    const handleEditSave = () => {
        if (editText.trim()) {
            onEdit(editText, c._id);
            setEditing(false);
            setShowActions(false);
        }
    };

    return (
        <div
            className={`relative mt-3 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 ${isOwner ? "cursor-pointer" : ""}`}
            onClick={handleClick}
        >
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-800">
                    {c.user?.name || "Unknown"}
                </span>
                <span className="text-[11px] text-gray-400">
                    {timeAgo(c.createdAt)}
                </span>
            </div>

            {/* Comment text or edit input */}
            {editing ? (
                <div
                    className="flex items-center gap-2 mt-1"
                    onClick={(e) => e.stopPropagation()}
                >
                    <input
                        className="flex-1 text-sm px-2 py-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-gray-500"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                        autoFocus
                    />
                    <button
                        onClick={handleEditSave}
                        className="text-xs px-2 py-1 bg-gray-800 text-white rounded-lg"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => { setEditing(false); setEditText(c.text); setShowActions(false); }}
                        className="text-xs px-2 py-1 border border-gray-300 rounded-lg text-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <p className="text-sm text-gray-700">{c.text}</p>
            )}

            {isOwner && showActions && !editing && (
                <div
                    className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-gray-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={() => setEditing(true)}
                        className="text-xs px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        ✏️ Edit
                    </button>
                    <button
                        onClick={() => onDelete(c._id)}
                        className="text-xs px-3 py-1 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
                    >
                        🗑️ Delete
                    </button>
                </div>
            )}
        </div>
    );
};