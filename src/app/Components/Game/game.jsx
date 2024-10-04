"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Farming from "../../Images/farming.webp";
import Breeding from "../../Images/breeding.webp";
import Crafting from "../../Images/crafting.webp";
import Exploration from "../../Images/exploration.webp";
import Border from "../../Images/border.svg";

function game() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [srcImage, SetSrcImage] = useState(Farming);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (window.innerWidth >= 1024)
      if (scrollY >= 3100 && scrollY < 3700) {
        SetSrcImage(Breeding);
      } else if (scrollY >= 3700 && scrollY < 4000) {
        SetSrcImage(Crafting);
      } else if (scrollY >= 4000) {
        SetSrcImage(Exploration);
      } else {
        SetSrcImage(Farming);
      }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full relative -top-10 lg:-top-40 z-40 px-2 lg:px-24">
      <div className="lg:flex justify-between gap-20">
        <h2
          className="text-2xl lg:text-6xl text-white"
          data-aos="fade-up"
          data-aos-duration="5000"
        >
          GamePlay features
        </h2>
        <p
          className="text-[#539369] text-lg mt-10 lg:text-3xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Discover all that Chumbi Valley has to offer with your Chumbi
          companions by your side.
        </p>
      </div>
      <div className="w-full flex justify-between gap-10 mt-32">
        <div className="lg:w-1/2 lg:sticky top-60 h-full">
          <Image
            className="transition-opacity duration-500 rounded-2xl hidden lg:block"
            src={srcImage}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-20 lg:gap-80 text-white">
          <div className="w-full flex gap-10 justify-between">
            <Image
              className="w-1/2 rounded-xl flex lg:hidden bg-cover"
              src={Farming}
            />
            <div className="w-1/2 lg:w-full lg:flex">
              <h2
                className=" lg:w-1/2 lg:text-4xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Farming
              </h2>
              <p
                className="lg:w-1/2 text-sm lg:text-2xl leading-10"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Restore a long forgotten forest farm to its former glory, grow
                crops and create an enchanting home for yourself and your
                Chumbi.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between">
            <Image
              className="w-1/2 rounded-xl flex lg:hidden bg-cover"
              src={Breeding}
            />
            <div className="w-1/2 lg:w-full lg:flex">
              <h2
                className="lg:w-1/2 lg:text-4xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Breeding
              </h2>
              <p
                className="lg:w-1/2 text-sm lg:text-2xl leading-10"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Accompany your Chumbi to the sacred Primordial Tree to begin
                breeding new Chumbi NFTs. An endless combination of attributes
                is possible. Will you hatch them all?
              </p>
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between">
            <Image
              className="w-1/2 rounded-xl flex lg:hidden bg-cover"
              src={Crafting}
            />
            <div className="w-1/2 lg:w-full lg:flex">
              <h2
                className="lg:w-1/2 lg:text-4xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Crafting
              </h2>
              <p
                className="lg:w-1/2 text-sm lg:text-2xl leading-10"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Combine your farm-grown crops with the treasured resources you
                find along your travels to craft useful and powerful items.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between">
            <Image
              className="w-1/2 rounded-xl flex lg:hidden bg-cover"
              src={Exploration}
            />
            <div className="w-1/2 lg:w-full lg:flex">
              <h2
                className="lg:w-1/2 lg:text-4xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Exploration
              </h2>
              <p
                className="lg:w-1/2 text-sm lg:text-2xl leading-10"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Explore a variety of unique and interesting regions, chart the
                valley, meet fascinating individuals and uncover hidden secrets
                and valuable resources along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-5 mt-20">
        <span className="w-1/4 h-[1px] bg-[#305B3F]"></span>
        <span className="w-3 h-3 rounded-full bg-[#305B3F]"></span>
        <span className="w-3/4 h-[1px] bg-[#305B3F]"></span>
      </div>
      <div className="flex w-full h-52 items-center justify-between">
        <h2 className="text md:text-2xl lg:text-5xl text-white">A beautiful world to explore...</h2>
        <div className="relative group cursor-pointer">
          <Image className="w-full h-auto" src={Border} alt="Gallery" />
          <a className="absolute group-hover:scale-105 duration-700 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl lg:text-3xl text-white p-4 rounded"
            href="">GALLERY</a>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-5">
        <span className="w-3/4 h-[1px] bg-[#305B3F]"></span>
        <span className="w-3 h-3 rounded-full bg-[#305B3F]"></span>
        <span className="w-1/4 h-[1px] bg-[#305B3F]"></span>
      </div>
    </div>
  );
}

export default game;
