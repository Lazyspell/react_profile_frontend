import gql from "graphql-tag";

export const SEND_EMAIL = gql`
    mutation sendEmail($input: InputExternalEmail!) {
        sendEmail(input: $input)
    }
`;

export const GET_PROFILE_BY_ID = gql`
    query findProfiles($email: String!) {
        profileId(email: $email) {
            first_name
            last_name
            dob {
                day
                month
                year
                age
            }
            location {
                state
                city
                zip_code
            }
            skills {
                frontend {
                    tech_name
                    tech_link
                    tech_description
                    image_url
                    years_of_experience
                    category
                    category_description
                }
                backend {
                    tech_name
                    tech_link
                    tech_description
                    image_url
                    years_of_experience
                    category
                    category_description
                }
                machine_learning {
                    tech_name
                    tech_link
                    tech_description
                    image_url
                    years_of_experience
                    category
                    category_description
                }
                cloud_service {
                    tech_name
                    tech_link
                    tech_description
                    image_url
                    years_of_experience
                    category
                    category_description
                }
            }
            projects {
                project_name
                frontend_link
                frontend_description
                backend_link
                backend_description
            }
            contact {
                phone_number
                email
                github
                linkedin
                discord
                about_me
                about_my_career
            }
            experience {
                company_name
                years_worked
                work_description
                tech_used
            }
            quotes {
                saying
                source
                source_link
            }
        }
    }
`;
