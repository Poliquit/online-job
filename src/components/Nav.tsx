import React from "react";

function Nav() {
  return (
    <>
      <div className="container mx-auto min-w-full border-b-4 mx-5 pt-5 pb-2">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center gap-x-5">
            <h1 className="text-3xl ml-5">Indeed</h1>
            <ul className="flex flex-row gap-x-5">
              <li className="text-sm text-gray-400">Home</li>
              <li className="text-sm text-gray-400">Company reviews</li>
              <li className="text-sm text-gray-400">Find salaries</li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <ul className="flex gap-x-8">
              <li>
                <i className="fa-solid fa-message text-lg"></i>
              </li>
              <li>
                <i className="fa-solid fa-bell text-lg"></i>
              </li>
              <li>
                <i className="fa-solid fa-user text-lg"></i>
              </li>
            </ul>
            <p className="mx-10 text-sm text-gray-400">Employers/Post Job</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
