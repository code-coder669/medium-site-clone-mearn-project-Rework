import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const FormSignUp = () => {

  return (
    <div className="bg-white/90 h-full fixed z-50 top-0 bottom-0 right-0 left-0 overflow-y-auto w-full flex justify-center ">
      <div className="form-wrapper p-10 bg-white h-screen  shadow-lg w-full md:w-1/2 mx-auto">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 ml-auto cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </NavLink>

        <h1 className="text-center text-2xl mt-20 font-serif md:text-3xl">
          Sign up with email.
        </h1>

        <div className="form-container  w-[70%] mx-auto flex flex-col">
          <p className=" text-center hidden mt-10 w-8/12 mx-auto md:block">
            Enter your email address to create an account.
          </p>

          <form
            action=""
            className="flex flex-col items-center gap-4 text-black"
          >
            <label htmlFor="email" className="mt-6 text-sm">
              Your email
            </label>
            <input
              type="text"
              name=""
              id=""
              className=" w-9/12 border-b block  p-2 outline-none text-center border-black"
            />

            <button className="mt-5 bg-black text-white rounded-full w-7/12 p-2">
              {" "}
              Continue{" "}
            </button>
          </form>

          <div className="text-sm text-green-700 mt-8">
            <NavLink to="/signup" className="flex items-center justify-center" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <span>All sign up options</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
