import { useState } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export const FilterPanel = ({ onFilter }) => {
    const [open, setOpen] = useState(false);
    const [filters, setFilters] = useState({
        category: "",
        minPrice: "",
        maxPrice: "",
        rating: "",
    });

    const handleApply = () => {
        onFilter(filters);
        setOpen(false);
    };

    const handleReset = () => {
        const reset = { category: "", minPrice: "", maxPrice: "", rating: "" };
        setFilters(reset);
        onFilter(reset);
        setOpen(false);
    };

    return (
        <div className="relative">
            {/* Filter trigger button */}
            <button
                onClick={() => setOpen(!open)}
                className="cursor-default flex items-center gap-2 text-xs font-semibold border border-gray-300 px-3 py-1.5 rounded-full hover:border-[#b48068] transition-colors"
            >
                <LuSlidersHorizontal className="text-base" />
                Filter
            </button>

            {/* Dropdown panel */}
            {open && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpen(false)}
                    />
                    <div className="absolute right-0 top-10 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-64 flex flex-col gap-4">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-bold text-gray-900">Filters</h3>
                            <RxCross2
                                onClick={() => setOpen(false)}
                                className="cursor-default text-gray-400 hover:text-gray-700 transition-colors"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">
                                Category
                            </label>
                            <select
                                value={filters.category}
                                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                className="cursor-default w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#b48068] transition-colors"
                            >
                                <option value="">All</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>

                        {/* Price range */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">
                                Price Range
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={filters.minPrice}
                                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#b48068] transition-colors"
                                />
                                <span className="text-gray-400 text-xs">–</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#b48068] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400">
                                Min Rating
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setFilters({ ...filters, rating: filters.rating === r ? "" : r })}
                                        className={`cursor-default flex-1 py-1.5 rounded-lg text-xs font-bold border-2 transition-all duration-200 ${
                                            filters.rating === r
                                                ? "border-[#b48068] bg-[#b48068] text-white"
                                                : "border-gray-200 text-gray-500 hover:border-[#b48068]/50"
                                        }`}
                                    >
                                        {r}★
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-1">
                            <button
                                onClick={handleReset}
                                className="cursor-default py-2 rounded-xl text-xs font-bold border-2 border-gray-200 text-gray-500 hover:border-gray-400 transition-all"
                            >
                                Reset
                            </button>
                            <button
                                onClick={handleApply}
                                className="cursor-default py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-gray-800 transition-all"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};