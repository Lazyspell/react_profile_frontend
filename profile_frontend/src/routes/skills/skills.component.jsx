import { useContext } from "react";
import { SkillsContainer } from "../../components/skills-container/skills-container.component";
import { ProfileContext } from "../../contexts/profile.context";
import "./skills.styles.scss";

export const Skills = () => {
    const { skills } = useContext(ProfileContext);
    return (
        <div className="skills-container">
            <h1>Skills and Experience</h1>
            <SkillsContainer skills={skills} />
        </div>
    );
};
