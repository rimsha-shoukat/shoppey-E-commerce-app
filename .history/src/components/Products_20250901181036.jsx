import {useEffect, useRef, useState} from 'react';

export default function Products({ products }) {
    const [visibleCount, setVisibleCount] = useState(6);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if(entries[0].isIntersecting) {
                    setVisibleCount((prevCount) => prevCount + 6);
                }
            },
            {}
        )
    })
}