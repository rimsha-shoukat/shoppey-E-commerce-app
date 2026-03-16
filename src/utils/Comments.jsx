import { BsFillSendFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { productsStore } from "../Store/productsStore.js";
import { CommentItem } from "./CommentItem.jsx";
import { userStore } from "../Store/userStore.js";

export const Comments = ({ image, user }) => {
    const { getComment, comments, addComment, editComment, deleteComment } = productsStore();
    const {fetchUser} = userStore();
    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    useEffect(() => { getComment(); }, []);

    const productComments = comments.filter((c) => c.product === image._id);

    const handleAdd = async () => {
        if (!comment.trim()) return;
        await addComment(comment, image._id);
        await getComment();
        await fetchUser();
        setComment("");
    };

    const handleEdit = async (newText, commentId) => {
        await editComment(newText, image._id, commentId);
        await getComment();
        await fetchUser();
    };

    const handleDelete = async (commentId) => {
        await deleteComment(image._id, commentId);
        await getComment();
        await fetchUser();
    };

    return (
        <div className="w-full h-auto px-2 relative">
            {/* Input */}
            <div className="w-full relative">
                <input
                    className="px-6 py-2 rounded-full w-full bg-gray-100 border border-gray-500 text-[1.3rem]"
                    placeholder="Add a comment..."
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                />
                <BsFillSendFill
                    onClick={!user ? () => navigate("/SignIU") : handleAdd}
                    className={`${
                        comment.trim()
                            ? "cursor-pointer text-gray-700"
                            : "cursor-not-allowed text-gray-400"
                    } absolute right-7 top-3 text-[1.6rem]`}
                />
            </div>

            {/* Comments list */}
            <div className="w-full h-auto p-2 mt-2">
                {productComments.length > 0 ? (
                    productComments.map((c) => (
                        <CommentItem
                            key={c._id}
                            c={c}
                            currentUserId={user?._id}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p className="text-sm text-gray-400 text-center mt-4">
                        No comments yet. Be the first!
                    </p>
                )}
            </div>
        </div>
    );
};