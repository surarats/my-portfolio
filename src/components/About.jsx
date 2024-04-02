import React from "react";
function About() {
  return (
    <div className="mt-20 p-6 max-w-7xl mx-auto " id="about">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/profile.png"
          className="w-[250px] h-[250px] object-top
  object-cover rounded-md shadow-md"
        />
        <div className="flex flex-col items-center gap-5 pt-6">
          <p>Hello, My name is</p>
          <h1 className="font-bold text-3xl">
            Surarat Supimarost <span className="hidden lg:inline">(Beam)</span>
          </h1>
          <p className="text-center">
            I am a beginner web development. I am interested in front-end
            development.
          </p>
        </div>
        <div className="flex justify-center items-center gap-1 pt-6">
          <a
            className="text-xl text-white bg-gray-700 rounded-md p-2 hover:bg-cyan-500"
            href=""
          >
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a
            className="text-xl text-white bg-gray-700 rounded-md p-2 hover:bg-cyan-500"
            href="https://github.com/surarats"
            target="_blank"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            className="text-xl text-white bg-gray-700 rounded-md p-2 hover:bg-cyan-500"
            href="https://drive.google.com/file/d/1oKZOCs6CmdO_uR10Za7HReahis0khL6h/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
