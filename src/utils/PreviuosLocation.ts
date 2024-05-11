import { useEffect, useRef } from "react"
import { useLocation } from "react-router";

export const usePreviuosLocation = () => {
    const location = useLocation();
    const previousLocation = useRef(location.pathname);

    useEffect(() => {
        previousLocation.current = location.pathname
    })

    return previousLocation.current;
}