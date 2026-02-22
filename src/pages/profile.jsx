import { userStore } from "../Store/userStore.js";

export default function Profile() {
    const { logout, deleteAccount, user } = userStore();
    const handleLogout = () => {
        logout();
    };
    const handleDeleteAccount = () => {
        deleteAccount();
    }

    return (
        <>
            <div className="w-1/2 max-[850px]:w-full select-none font-bold font-serif absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] shadow-[0.1px_0.1px_0.1rem_#dd957a] p-[3rem] max-[500px]:p-0 rounded-md flex flex-col items-start justify-center gap-4">
                <div className="w-full flex flex-row items-center justify-between">
                    <h1 className="text-[1.2rem] text-[#b48068] leading-5">{user.name}</h1>
                    <p>{user.rank}</p>
                </div>
                <input disabled type="email" value={user.email} />
                <div className="w-full flex flex-row items-center justify-between">
                    <input disabled type="number" value={user.number || "null"} />
                    <button disabled className="cursor-pointer text-[0.8rem] text-[#b48068] hover:text-black hover:transition-all duration-700 ease-in-out">Add</button>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <input disabled className="w-full" type="text" value={user.location || "null"} />
                    <button disabled className="cursor-pointer text-[0.8rem] text-[#b48068] hover:text-black hover:transition-all duration-700 ease-in-out">Add</button>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div>
                        <button className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Comments</button>
                        <button className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Orders</button>
                        <button className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Reviews</button>

                    </div>
                    <div className="flex flex-col gap-2 w-full h-[10rem] overflow-y-scroll [scrollbar-width:none]">
                        {/* comment history  */}
                        {
                            user?.comments.map((comment) => (
                                <div className="w-full border border-black rounded-sm bg-gray-200 p-2">
                                    <p>productId to whom</p>
                                    <h1 className="text-[1rem]">Commentext was that noe more than two lines will be visible okay!</h1>
                                    <p>2024-05-15</p>
                                </div>
                            ))
                        }

                        {/* order history  */}
                        {
                            user?.order.map((order) => (
                                <div className="w-full border border-black rounded-sm bg-gray-200 p-2">
                                    <div className="flex flex-row items-center justify-between">
                                        <p>orderId</p>
                                        <h1 className="text-[1rem]">50$</h1>
                                    </div>
                                    <h1 className="text-[1rem]">Order detail like products bill and those like message</h1>
                                    <p>2024-05-15</p>
                                </div>
                            ))
                        }

                        {/* review history */}
                        {
                            user?.reviews.map((comment) => (
                                <div className="w-full border border-black rounded-sm bg-gray-200 p-2">
                                    <p>order on which</p>
                                    <h1 className="text-[1rem]">Review was that not more than two lines will be visible okay!</h1>
                                    <p>2024-05-15</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button disabled onClick={handleLogout} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Logout</button>
                <button disabled onClick={handleDeleteAccount} className="cursor-pointer text-[1rem] bg-black text-[#b48068] border-2 border-black hover:text-black hover:bg-[#b48068] hover:transition-all duration-700 ease-in-out px-[1rem] py-[0.35rem]">Delete</button>
            </div>
        </>
    )

}

