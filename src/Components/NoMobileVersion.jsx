import React from "react";

function NoMobileVersion() {
  return (
    <div>
      <div class="h-screen w-screen bg-gray-50 flex items-center md:hidden">
        <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div class="w-full lg:w-1/2 mx-8">
            <div class="text-7xl text-green-500 font-dark font-extrabold mb-8">
              {" "}
              Oops!
            </div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we didn't build the mobile version of this
            </p>
          </div>
          <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              class=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMobileVersion;
