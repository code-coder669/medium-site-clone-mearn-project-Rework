import logo from "../assets/img/SVGs/logo.svg";
import userIcon from "../assets/img/PNGs/userIcon.png";
import { NavLink } from "react-router-dom";

export const LoggedInUserNavBar = () => {
  return (
    <>
      <div className="wrapper border-b border-gray-200">
        <nav className="py-2 px-6 md:container mx-auto justify-between items-center md:flex flex-row">
          <div className="left-col flex gap-4 items-center">
            <div className="logo">
              <NavLink to="/"><img src={logo} alt="" srcset="" className="w-40" /></NavLink>
            </div>
            <div className="search-bar flex gap-2 bg-slate-100 p-2 rounded-full w-full">
              <label htmlFor="searchbar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </label>
              <input
                type="search"
                name=""
                id="searchbar"
                placeholder="search"
                className="bg-transparent outline-none border-none text-gray-900"
              />
            </div>
          </div>

          <div className="mt-2 border-t right-col flex gap-4 text-sm items-center justify-center pt-2 text-gray-500 md:border-none md:pt-0">
            <div className="write flex items-center gap-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <span>Write</span>
            </div>
            <div className="btn bg-green-600 text-white rounded-full px-3 py-2">
              <NavLink to="/signup">sign up</NavLink>
            </div>
            <div className="btn">
              <NavLink to="/signin">sign in</NavLink>
            </div>
            <div className="img border rounded-full cursor-pointer ">
              <img src={userIcon} alt="" srcset="" className="rounded-full" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
