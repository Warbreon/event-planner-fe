import { FC, useEffect } from "react";
import { useLocation } from "react-router"

interface Props {
    selector: string;
}

const ScrollToTop: FC<Props> = ({ selector }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollTop = 0;
        }
    }, [pathname, selector]);

    return null;
};

export default ScrollToTop;