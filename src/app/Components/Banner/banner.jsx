"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Leavestop from "../../Images/leavestop.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner1 from '../../Images/01_token_des@2.4bf5d3.webp'
import LeavesBottom from "../../Images/leavesBottom.svg";


function banner() {
    useEffect(() => {  
        AOS.init();  
      }, []);  
  return (
    <div className="relative w-full -mt-10 md:-mt-20 lg:-mt-32">
      <div className="w-full relative">
      <Image className="absolute w-full" src={Leavestop}/>
      <Image className="w-full pt-10 lg:pt-72" src={Banner1}/>
      <Image className="w-full -mt-20 lg:-mt-72" src={LeavesBottom}/>
      </div>
    </div>
  );
}

export default banner;
