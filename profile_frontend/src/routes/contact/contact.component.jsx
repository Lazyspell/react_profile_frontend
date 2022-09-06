import { EmailForum } from "../../components/email-forum/email-forum.component";
import GoogleMapComponent from "../../components/google-maps/google-maps.component";
import "./contact.styles.scss";

export const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-center-left">
                        <div className="contact-left-header-div">
                            <h1 className="contact-left-header">Contact Me</h1>
                        </div>
                        <div className="contact-left-text-container">
                            <p className="contact-left-text">
                                I'm interested in any kind of opportunities -
                                especially ambitious or large projects. However,
                                if you have other request or question, don't
                                hesitate to contact me
                            </p>
                        </div>
                        <div className="contact-email-forum">
                            <EmailForum />
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <GoogleMapComponent />
                </div>
            </div>
        </>
    );
};
