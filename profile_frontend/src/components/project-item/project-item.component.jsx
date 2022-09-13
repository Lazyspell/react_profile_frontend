import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { TechList } from "../tech-list/tech-list.component";
import { sizing } from "@mui/system";

import "./project-item.styles.scss";

export const ProjectItem = ({ inputWork }) => {
    const { project_name, project_description, project_links, tech_used } =
        inputWork;

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        height: "300px",
        backgroundColor: "black",
        overflow: "hidden",
        overflowY: "scroll", // added scroll
    };

    return (
        <div className="main-project-item">
            <Card style={cardStyle}>
                <div className="project-card">
                    <div className="project-item-left">
                        <Typography
                            variant="h4"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            {project_name}
                        </Typography>

                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            <h5>Project Description:</h5>
                            {project_description}
                        </Typography>
                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            <h5>GitHub Links:</h5>
                            <TechList technologies={project_links} />
                        </Typography>
                    </div>
                    <div className="project-item-right">
                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Technology Used:{tech_used.length}
                            <TechList technologies={tech_used} />
                        </Typography>
                    </div>
                </div>
            </Card>
        </div>
    );
};
