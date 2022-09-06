import "./quotes-item.styles.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const QuoteItem = ({ inputQuotes }) => {
    const { saying, source, source_link } = inputQuotes;

    return (
        <Card sx={{ maxWidth: 700 }} style={{ backgroundColor: "black" }}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ backgroundColor: "black" }}
                    color="white"
                    className="test-quote-item"
                >
                    {saying}
                </Typography>
                <Typography
                    variant="body2"
                    color="white"
                    style={{ backgroundColor: "black" }}
                >
                    -{source}
                </Typography>
                <br></br>
            </CardContent>
        </Card>
    );
};
