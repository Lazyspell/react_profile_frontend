import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { TechList } from "../tech-list/tech-list.component";

import "./project-item.styles.scss";

export const ProjectItem = ({ inputWork }) => {
    const {
        project_name,
        frontend_link,
        frontend_description,
        backend_link,
        backend_description,
        tech_used,
    } = inputWork;

    console.log(tech_used);

    return (
        <div className="main-project-item">
            <Card
                sx={{ maxWidth: "100%" }}
                style={{ backgroundColor: "black" }}
            >
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
                            Frontend Description: {frontend_description}
                        </Typography>

                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Frontend Link: {frontend_link}
                        </Typography>
                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Backend Description: {backend_description}
                        </Typography>

                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Backend Link: {backend_link}
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
