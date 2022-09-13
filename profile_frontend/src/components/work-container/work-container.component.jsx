import { WorkItem } from "../work-item/work-item.component";
import "./work-container.styles.scss";

export const WorkContainer = ({ experiences }) => {
    return (
        <>
            <div className="main-work-container">
                <h1>Work Experience</h1>

                {experiences.map((experience, index) => (
                    <WorkItem
                        key={index + 1}
                        inputWork={experience}
                        className="work-component"
                    />
                ))}
            </div>
        </>
    );
};
