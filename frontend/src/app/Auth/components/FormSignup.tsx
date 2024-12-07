"use client";

import React from "react";
import ButtonToggle from "./ButtonToggle";
import GoogleSignup from "@/src/app/auth/components/GoogleSignup";
import DividerWithText from "@/src/app/auth/components/DividerWithText";
import InputWithLabel from "@/src/app/auth/components/InputWithLabel";
import Button from "@/src/app/design-system/Button";

enum SignupUserType {
  jobSeeker,
  company,
}

export default function FormSignup() {
  const [jobSeekerOrCompany, setJobSeekerOrCompany] =
    React.useState<SignupUserType>(SignupUserType.jobSeeker);

  const toggleJobSeekerOrCompany = (userType: SignupUserType) => {
    setJobSeekerOrCompany(userType);
  };

  return (
      <form>
        <div>
          <ButtonToggle
              isActive={jobSeekerOrCompany === SignupUserType.jobSeeker}
              label="Job Seeker"
              onClick={() => toggleJobSeekerOrCompany(SignupUserType.jobSeeker)}
          />
          <ButtonToggle
              isActive={jobSeekerOrCompany === SignupUserType.company}
              label="Company"
              onClick={() => toggleJobSeekerOrCompany(SignupUserType.company)}
          />
        </div>
        <h2 className={"custom-dark text-3xl"}>Get more opportunities</h2>
        <GoogleSignup/>
        <DividerWithText label={"Or sign up with email"} />
          <InputWithLabel labelText={"Full Name"} InputPlaceHolder={"Enter you full name"} />
          <InputWithLabel labelText={"Email Address"} InputPlaceHolder={"Enter email address"} />
          <InputWithLabel labelText={"Password"} InputPlaceHolder={"Enter password"} />
          <Button text={"Continue"} textColor={"text-white"} backgroundColor={"bg-indigo-600"} />
      </form>
  );
}
