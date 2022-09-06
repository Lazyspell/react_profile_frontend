import "./text.styles.scss";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TextAnimation = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Software Developer",
                "Full Stack Developer",
                "Data Analyst",
                "Tennis Player",
                "Father",
            ],

            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <>
            <span style={{ whiteSpace: "pre" }} ref={el} />
        </>
    );
};
