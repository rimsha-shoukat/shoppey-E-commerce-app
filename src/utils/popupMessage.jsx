import { useEffect } from "react"

export const PopUp = ({ popupMsg, setPopupMsg }) => {

    useEffect(() => {
        const timer = setTimeout(() => setPopupMsg(null), 3000);
        return () => clearTimeout(timer);
    }, [popupMsg]);

    if (!popupMsg) return null;

    return (
        <span
            className="border border-amber-50 p-2 bg-[#b48068] text-white rounded-sm text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        >
            {popupMsg}
        </span>
    )
}