import { useState, useEffect } from "react";

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1600 // Fallback for SSR
    );

    useEffect(() => {
        if (typeof window === "undefined") return;

        let timeoutId;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 150); // Debounce delay
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
}

export default useWindowWidth;
