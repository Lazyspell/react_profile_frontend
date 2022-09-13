import "./work-item.styles.scss";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { TechList } from "../tech-list/tech-list.component";

export const WorkItem = ({ inputWork }) => {
    const { company_name, years_worked, work_description, tech_used, role } =
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
        <div className="main-work-item">
            <Card style={cardStyle}>
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
                            Role: {role}
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
                            <h5>Description:</h5>
                            <div
                                className="work-container-description"
                                dangerouslySetInnerHTML={{
                                    __html: work_description,
                                }}
                            />
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
                            <TechList technologies={tech_used} />
                        </Typography>
                    </div>
                </div>
            </Card>
        </div>
    );
};
