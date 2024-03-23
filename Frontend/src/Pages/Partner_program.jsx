import React from "react";
import logo from "../assets/img/SVGs/logo.svg";
import { NavLink } from "react-router-dom";

const Partner_program = () => {
  return (
    <>
      <div className=" border-b border-black">
        <nav className="h-[15vh] px-6 flex justify-between items-center md:container mx-auto">
          <div className="logo">
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                srcset=""
                className="w-[150px] cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="sign-in-up flex gap-4">
            <div className="sign-in border-black  border px-4 py-2 rounded-full cursor-pointer">
              Sign in
            </div>
            <div className="sign-up border-black  border px-4 py-2 rounded-full text-white bg-black cursor-pointer">
              Sign up
            </div>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <div className="hero h-[85vh] bg-heroBg px-6 border-black border-b">
        <div className="wrapper bg-hero-bg-img bg-bottom bg-cover h-[100%] md:bg-auto bg-no-repeat md:bg-[25vw] flex items-center">
          <div className="hero-text md:w-3/5 flex flex-col gap-5">
            <h1 className="text-[3.5rem] leading-[1] md:text-[6rem] font-serif text-white  mb-10">
              Medium Partner Program
            </h1>

            <p className="text-white md:w-1/2 text-xl font-normal ">
              Medium’s Partner Program is for people who are interested in
              helping us fulfill our mission of deepening the collective wisdom
              of the world through personal expression, knowledge-sharing, and
              storytelling.
            </p>

            <div className="apply-btn  bg-black text-white block w-fit px-6 py-3 rounded-full">
              Apply now
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TWO */}

      <div className="section-two  border-b border-black ">
        <div className="wrapper flex flex-col py-10 px-6 md:container md:flex-row gap-6">
          <div className="left-col flex flex-col gap-5 md:w-1/2 ">
            <h2 className="font-serif text-4xl md:text-7xl w-4/5">
              Quality over clickbait
            </h2>
            <p className="font-serif md:text-xl text-gray-800 md:w-4/5 ">
              In a creator economy ruled by clickbait and ad impressions,
              Medium’s Partner Program is taking a stand for quality. As a
              partner, when your best stories are read by Medium members, a
              portion of their membership dues will be shared with you. Here are
              a few factors we consider in order to determine quality.
            </p>
          </div>

          <div className="right-col md:w-1/2 flex flex-col gap-5">
            <div className="items  py-5">
              <h3 className="font-bold">Member read time</h3>
              <p className="text-gray-700">
                Members-only stories will earn money when a member reads your
                story for 30 seconds or more, and will continue to earn more the
                longer they keep reading. Long, thoughtful, reads are
                encouraged!
              </p>
            </div>

            <div className="items border-t py-5">
              <h3 className="font-bold">Positive interactions</h3>
              <p className="text-gray-700">
                You’ll also earn more when members clap, highlight, reply, or
                engage with your story in other ways.
              </p>
            </div>

            <div className="items border-t py-5">
              <h3 className="font-bold">Follower bonus</h3>
              <p className="text-gray-700">
                When members follow you and continue to read and interact with
                your stories, you will be given a follower bonus. We encourage
                writers to share their stories with readers in a way that
                promotes community and audience building.
              </p>
            </div>

            <div className="items border-t py-5">
              <h3 className="font-bold">Boost bonus</h3>
              <p className="text-gray-700">
                Stories that are Boosted will also earn more for each read and
                interaction. We recommend that writers spend more time on fewer,
                high-quality stories to reach this bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner_program;
