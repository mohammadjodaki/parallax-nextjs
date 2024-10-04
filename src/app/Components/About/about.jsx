"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Leavestop from "../../Images/leavestop.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner1 from '../../Images/banner1.webp'
import LeavesBottom from "../../Images/leavesBottom.svg";


function about() {
    useEffect(() => {  
        AOS.init();  
      }, []);  
  return (
    <div className="relative -mt-10 lg:mt-0 pt-10 z-40 w-full bg-[#101615]">
      <div className="flex gap-10 flex-col justify-center items-center">
        <div className="flex md:gap-20 items-center">
          <hr className="hidden lg:flex w-40 h-1 text-white" data-aos="fade-right"/>
          <h2 className="text-white text-6xl"data-aos="zoom-in">About</h2>
          <hr className="hidden lg:flex w-40 h-1 text-white" data-aos="fade-left"/>
          <hr />
        </div>
        <p className="container text-3xl px-2 lg:px-0 leading-[50px] text-center text-white" data-aos="fade-up" data-aos-duration="3000">
          Immerse yourself in Chumbi Valley, an enchanting and mystical
          play-and-earn blockchain game with intriguing and adorable NFT
          creatures known as Chumbi. Explore the uncharted forest, start a farm,
          grow crops and craft special items with your Chumbi companions by your
          side, while earning crypto rewards.
        </p>
      </div>
      <div className="w-full relative">
      <Image className="absolute w-full" src={Leavestop}/>
      <Image className="w-full pt-10 lg:pt-72" src={Banner1}/>
      <Image className="w-full -mt-20 lg:-mt-72" src={LeavesBottom} />
      </div>
    </div>
  );
}

export default about;
