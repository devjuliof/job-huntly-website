'use client';

import React from "react";

enum SignupUserType {
    jobSeeker,
    company
}

export default function FormSignup() {
    console.log(0)

    const [jobSeekerOrCompany, setJobSeekerOrCompany] = React.useState<SignupUserType>(SignupUserType.jobSeeker);

    const toggleJobSeekerOrCompany = (userType: SignupUserType) => {
        setJobSeekerOrCompany(userType)
    }

    return (
        <div>
            <button onClick={() => toggleJobSeekerOrCompany(SignupUserType.jobSeeker)}>
                <p className={`text-indigo-700  font-semibold p-3 ${jobSeekerOrCompany === SignupUserType.jobSeeker && "bg-indigo-200"}`}>Job Seeker</p>
            </button>
            <button onClick={() => toggleJobSeekerOrCompany(SignupUserType.company)}>
                <p className={`text-indigo-700  font-semibold p-3 ${jobSeekerOrCompany === SignupUserType.company && "bg-indigo-200"}`}>Company</p>
            </button>
        </div>
    )
}