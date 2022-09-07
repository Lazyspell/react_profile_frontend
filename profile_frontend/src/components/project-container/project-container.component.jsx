import { ProjectItem } from "../project-item/project-item.component";
import "./project-container.styles.scss";

export const ProjectContainer = ({ projects }) => {
    return (
        <>
            <div>
                <h1>Personal Projects</h1>
                {projects.map((project, index) => (
                    <ProjectItem
                        key={(index, +1)}
                        inputWork={project}
                        className="project-component"
                    />
                ))}
            </div>
        </>
    );
};
