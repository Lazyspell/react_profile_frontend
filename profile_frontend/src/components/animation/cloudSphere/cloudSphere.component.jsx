import { useEffect } from "react";
import TagCloud from "TagCloud";

import "./cloudSphere.styles.scss";

export const AnimatedSphere = ({ techList, radius }) => {
    useEffect(() => {
        TagCloud(".content", techList, {
            // radius in px
            radius: radius,
            // animation speed
            // slow, normal, fast
            maxSpeed: "fast",
            initSpeed: "fast",
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            // direction: 135,
            // interact with cursor move on mouse out
            // keep: true,
            // radius: screen.width > 500 ? 300 : 100,
            // maxSpeed: "fast",
            // initSpeed: "normal",
            // direction: 100,
            // keep: false,
            useContainerInlineStyles: true,
            // sectionContainer: "about",
        });
    }, [techList]);

    return <span className="content"></span>;
};
