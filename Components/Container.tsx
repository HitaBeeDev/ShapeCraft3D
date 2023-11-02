import React from "react";
import Image from "next/image";

const Container = () => {
  return (
    <div className="lg:flex lg:flex-row items-center lg:items-start lg:gap-10 ml-5 lg:ml-20 mt-10 mr-5 lg:mr-20 p-7">
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-6xl font-bold">
          A massive library of free 3D shapes
        </h1>
        <p className="text-base lg:text-lg mt-3 lg:mt-5">
          A vast and extensive collection of 3D shapes available for free. This
          library encompasses an extensive range of three-dimensional objects
          and forms, offering a diverse and comprehensive resource for various
          applications. Whether you are a 3D artist, designer, engineer, or
          enthusiast, this library provides a wealth of options and
          possibilities for your creative and technical projects. Access to
          these free 3D shapes facilitates innovation, visualization, and
          experimentation, making it a valuable asset for individuals and
          professionals alike.
        </p>
        <div className="mt-5 lg:mt-10 flex flex-col lg:flex-row">
          <input
            type="text"
            placeholder="Type your item's name..."
            className="w-full lg:w-80 py-2 px-3 border rounded-lg lg:rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 lg:rounded-l"
          />
          <button className="mt-3 lg:mt-0 text-sm w-full lg:w-20 px-3 bg-purple-800 text-white rounded-lg lg:rounded-r-xl hover:bg-purple-400 focus:outline-none lg:rounded-r">
            Search
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-5 lg:mt-0">
        <Image src="/home.png" alt="home" width={600} height={50} />
      </div>
    </div>
  );
};

export default Container;
