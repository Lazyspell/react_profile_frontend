import { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_PROFILE_BY_ID } from "../client/profileQuery";

export const ProfileContext = createContext({
    first_name: "",
    last_name: "",
    dob: {},
    location: {},
    skills: [],
    projects: [],
    contact: {},
    experience: [],
    quotes: [],
});

export const ProfileProvider = ({ children }) => {
    const { data, loading, error } = useQuery(GET_PROFILE_BY_ID, {
        variables: {
            email: "jelam2975@gmail.com",
        },
    });

    useEffect(() => {
        if (data) {
            const {
                profileId: {
                    first_name,
                    last_name,
                    dob,
                    location,
                    skills,
                    projects,
                    contact,
                    experience,
                    quotes,
                },
            } = data;

            setFirstName(first_name);
            setLastName(last_name);
            setDOB(dob);
            setLocation(location);
            setSkills(skills);
            setProjects(projects);
            setContact(contact);
            setExperience(experience);
            setQuotes(quotes);
        }
    }, [data]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDOB] = useState("");
    const [location, setLocation] = useState({});
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contact, setContact] = useState({});
    const [experience, setExperience] = useState([]);
    const [quotes, setQuotes] = useState([]);

    const value = {
        firstName,
        lastName,
        dob,
        location,
        skills,
        projects,
        contact,
        experience,
        quotes,
    };

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
};
