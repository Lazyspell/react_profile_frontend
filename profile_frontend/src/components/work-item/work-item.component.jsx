import "./work-item.styles.scss";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { AnimatedSphere } from "../animation/cloudSphere/cloudSphere.component";

export const WorkItem = ({ inputWork }) => {
    const { company_name, years_worked, work_description, tech_used } =
        inputWork;

    console.log(tech_used);

    return (
        <div className="main-work-item">
            <Card
                sx={{ maxWidth: "100%" }}
                style={{ backgroundColor: "black" }}
            >
                <div className="work-card">
                    <div className="work-item-left">
                        <Typography
                            variant="h4"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            {company_name}
                        </Typography>

                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Years Worked: {years_worked}
                        </Typography>

                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Description: {work_description}
                        </Typography>
                    </div>
                    <div className="work-item-right">
                        <Typography
                            variant="body"
                            component="div"
                            color="white"
                            style={{ backgroundColor: "black" }}
                        >
                            Technology Used:{tech_used.length}
                            <AnimatedSphere techList={tech_used} radius={150} />
                        </Typography>
                    </div>
                </div>
            </Card>
        </div>
    );
};
