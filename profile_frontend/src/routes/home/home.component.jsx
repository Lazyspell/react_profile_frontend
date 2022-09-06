import { useContext } from "react";
import { TextAnimation } from "../../components/animation/textAnimation/text.component";
import { ProfileContext } from "../../contexts/profile.context";
import { Button } from "../../components/button/button.component";

import "./home.styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
    const { firstName, lastName } = useContext(ProfileContext);

    return (
        <div className="home-container">
            <div className="name">
                <h1 className="text">
                    <span className="a">Hi,</span>
                </h1>
                <h1 className="text">
                    <span className="a">I am</span>
                </h1>
                <h1 className="text">
                    <span className="a">{firstName}</span>{" "}
                    <span className="n">{lastName}</span>{" "}
                </h1>
                <h1 className="type">
                    <TextAnimation />
                </h1>
                <Link className="nav-link" to="/contact">
                    <Button> Contact Me </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
