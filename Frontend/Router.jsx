import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/Pages/Home";
import CreateStory from "./src/Pages/CreateStory";
import SignIn from "./src/Pages/SignIn";
import SignUp from "./src/Pages/SignUp";
import SingleStory from "./src/Pages/SingleStory";
import Navigation from "./src/components/Navigation";
import FormSignUp from "./src/components/FormSignUp";
import FormSignIn from "./src/components/FormSignIn";
import NavDisplay from "./src/components/NavDisplay";
import Partner_program from "./src/Pages/Partner_program";





const Router = () => {
  return (
    <BrowserRouter>
      <NavDisplay>
        <Navigation />
      </NavDisplay>
      
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/createstory" element={<CreateStory />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/form-signup" element={<FormSignUp />} />
          <Route path="/form-signin" element={<FormSignIn />} />
          <Route path="/singlestory" element={<SingleStory />} />
          <Route path="/partner-program" element={<Partner_program />} />
          <Route path="/:singlestory" element={<SingleStory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
