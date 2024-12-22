import { useState } from "react";

export const useHoverEffect = (initialColor: string = "rgba(0, 0, 0, 0.5)") => {
    const [overlayStyle, setOverlayStyle] = useState({
        left: "0px",
        top: "0px",
        width: "0px",
        height: "0px",
        opacity: 0,
        backgroundColor: initialColor,
    });

    const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = e.currentTarget;
        setOverlayStyle({
            left: `${offsetLeft}px`,
            top: `${offsetTop}px`,
            width: `${offsetWidth}px`,
            height: `${offsetHeight}px`,
            opacity: 1,
            backgroundColor: overlayStyle.backgroundColor,
        });
    };

    const handleMouseOut = () => {
        setOverlayStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    return { overlayStyle, handleMouseOver, handleMouseOut };
};
