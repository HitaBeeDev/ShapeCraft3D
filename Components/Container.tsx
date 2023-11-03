"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Container = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/img1.png", "/img2.png", "/img3.png", "/img4.png"];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="lg:flex lg:flex-row items-center lg:items-start lg:gap-10 lg:ml-20 lg:mr-20 p-8">
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-bold">
          A massive library of free 3D shapes
        </h1>
        <p className="text-sm lg:text-lg mt-3 lg:mt-5">
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
        <div className="mt-6 justify-center h-12 flex flex-col lg:flex-row">
          <div className="flex">
            <input
              type="text"
              placeholder="Please enter the name of your item..."
              className="h-12 m-auto w-full lg:w-80 py-2 px-3 border rounded-lg lg:rounded-l-xl "
            />
            <button className="-ml-5 text-sm w-20 px-3 bg-violet-700 text-white rounded-lg lg:rounded-r-xl hover:bg-violet-500">
              Search
            </button>
          </div>
        </div>

        <div>
          <button className="text-left mt-10 text-base	">
            Looking to connect with us? Just complete this form, and we'll
            promptly reach out to you.
          </button>

          <div className="mt-4 w-full p-4 bg-violet-100 bg-opacity-50 shadow rounded-xl">
            <form className="flex flex-wrap items-center">
              <div className="w-full sm:w-auto flex-grow mb-2 sm:mr-2 sm:mb-0">
                <label className="block text-violet-500 text-sm font-bold">
                  Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="mt-1 px-2 py-1 w-full border rounded-lg"
                  />
                </label>
              </div>
              <div className="w-full sm:w-auto flex-grow mb-2 sm:mr-2 sm:mb-0">
                <label className="block text-violet-500 text-sm font-bold">
                  Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 px-2 py-1 w-full border rounded-lg"
                  />
                </label>
              </div>
              <div className="w-full sm:w-auto flex-grow self-end">
                <input
                  type="submit"
                  value="Submit"
                  className="w-full px-4 py-2 text-sm font-bold text-white bg-violet-700 rounded-lg hover:bg-violet-500 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=" mt-5 lg:mt-0 lg:ml-28 ">
        <div className="h-56">
          <Image
            src={images[currentSlide]}
            alt="home images"
            width={400}
            height={50}
          ></Image>
        </div>

        <div className="sm:mt-1 m-auto  justify-between flex bottom-0 left-0 p-5 lg:mt-56 lg:gap-72">
          <button
            onClick={prevSlide}
            className="bg-violet-300 text-white rounded-full hover:bg-violet-100"
          >
            <Image src="/prev.png" width={35} height={35}></Image>
          </button>
          <button
            onClick={nextSlide}
            className=" bg-violet-300 text-white rounded-full  hover:bg-violet-100"
          >
            <Image
              src="/next.png"
              width={35}
              height={35}
              alt="home images"
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
