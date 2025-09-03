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
            { threshold : 1}
        );
        if(loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
    }, []);
    return (
                <section className="columns-5 mt-[1rem] w-[100%] h-auto p-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
                </section>
    )
}