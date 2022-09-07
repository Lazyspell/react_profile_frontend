import "./tech-list.styles.scss";

export const TechList = ({ technologies }) => {
    return (
        <>
            {technologies.map((tech, index) => (
                <ul>
                    <li>{tech}</li>
                </ul>
            ))}
        </>
    );
};
