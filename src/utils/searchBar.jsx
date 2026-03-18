import { useRef, useEffect } from "react";

export const SearchBar = ({ onSearch }) => {
    const searchRef = useRef(null);
    const timerRef = useRef(null);

    const handleTyping = () => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            onSearch(searchRef.current.value);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            clearTimeout(timerRef.current);
            onSearch(searchRef.current.value);
        }
    };

    // cleanup on unmount
    useEffect(() => () => clearTimeout(timerRef.current), []);

    return (
        <div className="flex items-center justify-center w-[50%] max-[550px]:w-[90%]">
            <div className="relative w-full">
                <input
                    type="text"
                    ref={searchRef}
                    placeholder="Search products..."
                    onKeyUp={handleTyping}
                    onKeyDown={handleKeyDown}
                    className="w-full h-10 pl-4 pr-10 rounded-full border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]"
                />
            </div>
        </div>
    );
};
