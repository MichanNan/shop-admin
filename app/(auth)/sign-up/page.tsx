import React from "react";

import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto">
        <h1 className="text-4xl font-semibold text-center text-neutral-900">
          Register
        </h1>
        <hr className="my-5" />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
