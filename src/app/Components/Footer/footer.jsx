"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Sky2 from "../../Images/sky2.webp";
import TsTop from "../../Images/ts-leaves-top.95169a.svg";
import Mountain1 from "../../Images/mountain2.svg";
import Mountain2 from "../../Images/mountaine4.webp";
import Icontw from "../../Images/icontw.svg";
import Icond from "../../Images/icond.svg";
import Icont from "../../Images/icont.svg";
import Character from "../../Images/character.webp";
import Three from "../../Images/three.webp";
import Grass from "../../Images/grass.svg";
import Logo from "../../Images/logo2.svg";
import Ictw from "../../Images/ictw.svg";
import Icd from "../../Images/icd.svg";
import Icf from "../../Images/icf.svg";
import Icy from "../../Images/icy.svg";

function Footer() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen lg:h-[150vh]">
        <Image className="absolute w-full h-full" src={Sky2} alt="sky" />
        <div
          id="down"
          className={`absolute -top-[500px] md:-top-[600px] lg:-top-[800px] w-full flex flex-col items-center gap-10`}
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.3s",
          }}
        >
          <h2 className="text-center text-5xl text-white">
            Join the Chumbi Community
          </h2>
          <p className="text-center text-2xl text-white">
            Chat with the community, ask questions, get involved in competitions
            and more!
          </p>
          <div className="w-full flex justify-center gap-10 pt-4">
            <Image
              className="w-7 lg:w-11 h-7 lg:h-11"
              src={Icontw}
              alt="Icon 1"
            />
            <Image
              className="w-7 lg:w-11 h-7 lg:h-11"
              src={Icond}
              alt="Icon 2"
            />
            <Image
              className="w-7 lg:w-11 h-7 lg:h-11"
              src={Icont}
              alt="Icon 3"
            />
          </div>
        </div>
        <Image className="absolute top-0 w-full" src={TsTop} alt="tstop" />
        <Image
          className="absolute bottom-0 w-full"
          src={Mountain2}
          alt="mountain1"
        />

        <div className="absolute bottom-14 md:bottom-24 lg:bottom-32 w-full flex">
          <Image className="w-1/2" src={Character} alt="character" />
          <Image className="w-1/2" src={Three} alt="three" />
        </div>
        <Image
          className="absolute -bottom-80 md:-bottom-96 lg:-bottom-[500px] w-full"
          style={{
            transform: `translateY(${-scrollY * 0.05}px)`,
            transition: "transform 0.3s",
          }}
          src={Grass}
          alt="grass"
        />
        <Image
          className="absolute -bottom-80 md:-bottom-96 lg:-bottom-[500px] w-full"
          style={{
            transform: `translateY(${-scrollY * 0.05}px)`,
            transition: "transform 0.3s",
          }}
          src={Mountain1}
          alt="mountain1"
        />
      </div>
      <div className="relative z-40 w-full flex justify-center my-20 flex-wrap gap-10 lg:gap-0 px-10 lg:px-24 bg-[#101615]">
        <div className="w-full lg:w-1/4 flex">
          <Image className="w-44 h-20" src={Logo} alt="logo" />
        </div>
        <div className="w-full lg:w-2/4 flex  gap-10 lg:gap-20">
          <ul className="w-full lg:w-1/2 flex flex-col gap-6">
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Game features</a>
            </li>
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Chumbi</a>
            </li>
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Gallery</a>
            </li>
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Whitepaper</a>
            </li>
          </ul>
          <ul className="w-full lg:w-1/2 flex flex-col gap-6">
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Game features</a>
            </li>
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Chumbi</a>
            </li>
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Gallery</a>
            </li>
            <li className="hover:text-white duration-500 text-xl text-[#7dc098]">
              <a href="">Whitepaper</a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 flex lg:flex-col gap-5">
          <input
            className="w-44 lg:w-60 h-10 lg:h-14 rounded-full outline-none px-5 bg-[#264632]"
            type="email"
            placeholder="Enter your email"
          />
          <div className="flex gap-5">
            <Image className="hover:bg-white duration-500 cursor-pointer" src={Ictw} alt="icon tw" />
            <Image className="hover:bg-white duration-500 cursor-pointer" src={Icd} alt="icon d" />
            <Image className="hover:bg-white duration-500 cursor-pointer" src={Icf} alt="icon t" />
            <Image className="hover:bg-white duration-500 cursor-pointer" src={Icy} alt="icon y" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-10 px-10 lg:px-24 gap-5">
        <span className="w-1/2 h-[1px] bg-[#305B3F]"></span>
        <span className="w-3 h-3 rounded-full bg-[#305B3F]"></span>
        <span className="w-1/2 h-[1px] bg-[#305B3F]"></span>
      </div>
      <h2 className="w-full h-20 text-lg md:text-xl lg:text-2xl flex items-center text-[#264632] px-10 lg:px-24"><pre>Copyright 2024 | MOHAMMAD JODAKI</pre></h2>
    </div>
  );
}

export default Footer;
