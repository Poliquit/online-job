import React from "react";

function Search() {
  return (
    <>
      <div className="container mx-auto flex justify-center mt-5">
        <div className="bg-white filter drop-shadow-xl border-1 border-blue-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Job title, keyword, or company"
              className="border rounded px-3 text-sm py-3 w-80"
            />
            <input
              type="text"
              placeholder="Location"
              className="border rounded px-3 text-sm py-3 w-80"
            />
            <button className="bg-blue-500 text-sm text-white mx-3 rounded px-3 py-1">
              Find Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
