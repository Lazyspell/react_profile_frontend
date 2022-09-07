import { WorkContainer } from "../../components/work-container/work-container.component";
import { ProfileContext } from "../../contexts/profile.context";
import { useContext } from "react";

import "./work.styles.scss";
import { ProjectContainer } from "../../components/project-container/project-container.component";

export const Work = () => {
    const { experience, projects } = useContext(ProfileContext);

    return (
        <>
            <div className="work-container">
                <div className="work-left">
                    <WorkContainer
                        experiences={experience}
                        className="work-component"
                    />
                </div>
                <div className="work-right">
                    <div className="salt">
                        <ProjectContainer projects={projects} />
                    </div>
                </div>
            </div>
        </>
    );
};
