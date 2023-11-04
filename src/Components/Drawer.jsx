import React, { useContext, useState } from "react";
import { DrawerContext } from "../Contexts/DrawerContext";
import { StyleMethodContext } from "../Contexts/StyleMethodContext";

function Drawer() {
  const { toggleHidden } = useContext(DrawerContext);
  const { styleMethod, handleStyleMethod } = useContext(StyleMethodContext);

  return (
    <div>
      <div>
        <div className={`fixed h-full w-full z-50 left-0 top-0`}>
          <div className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z[-1]"></div>

          <div className="fixed h-full w-1/3 sm:w-72 right-0 top-0 bg-white shadow-lg p-4">
            <button
              type="button"
              onClick={toggleHidden}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   "
            >
              <svg
                className="w-5 h-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>

            <h2 className="mt-10">Styling Method</h2>

            <div className="relative inline-flex mt-5">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select
                className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none "
                value={styleMethod}
                onChange={handleStyleMethod}
              >
                <option value="css">Pure CSS</option>
                <option value="bootstrap">With Bootstrap</option>
                <option value="tailwind">With Tailwind</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
