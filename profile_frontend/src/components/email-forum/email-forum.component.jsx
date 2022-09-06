import { useMutation } from "@apollo/client";
import { TextField } from "@mui/material";
import { useState } from "react";
import { SEND_EMAIL } from "../../client/profileQuery";
import { Button } from "../button/button.component";

import "./email-forum.styles.scss";

export const EmailForum = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const nameChange = (event) => {
        setName(event.target.value);
    };
    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const subjectChange = (event) => {
        setSubject(event.target.value);
    };
    const messageChange = (event) => {
        setMessage(event.target.value);
    };

    const [submitEmail, { loading, error }] = useMutation(SEND_EMAIL, {
        variables: {
            input: {
                email_name: name,
                email_address: email,
                email_subject: subject,
                email_message: message,
            },
        },
        onCompleted() {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        },
    });

    if (loading) {
        return "Submitting...";
    }

    return (
        <>
            <div className="contact-text-field">
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    className="forum-input"
                    style={{ width: "47%" }}
                    onChange={nameChange}
                    value={name}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    className="forum-input"
                    style={{ width: "47%" }}
                    onChange={emailChange}
                    value={email}
                />
                ;
            </div>
            <div className="contact-subject-field">
                <TextField
                    id="subject"
                    label="Subject"
                    variant="outlined"
                    className="forum-input"
                    style={{ width: "97%" }}
                    onChange={subjectChange}
                    value={subject}
                />
            </div>
            <div className="contact-text-field">
                <TextField
                    id="email"
                    label="Message"
                    variant="outlined"
                    className="forum-input"
                    style={{ width: "97%" }}
                    onChange={messageChange}
                    value={message}
                    multiline
                    rows={9}
                />
            </div>
            <div className="contact-button">
                <Button onClick={submitEmail}>Send Message</Button>
            </div>
        </>
    );
};
