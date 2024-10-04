import Image from "next/image";
import React from "react";
import TokenIcon from "../../Images/token@2x.dbbc9b.png";
import Border from "../../Images/border.svg";

function abouttoken() {
  return (
    <div>
      <div className="w-full flex justify-between flex-wrap -mt-20 md:-mt-32 lg:-mt-52 px-10 lg:px-24 py-10 lg:py-20">
        <div
          className="w-full h-full flex gap-5 lg:w-1/2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image
            className="w-8 lg:w-12 h-12 lg:h-16"
            src={TokenIcon}
            alt="token"
          />
          <h2 className="text-2xl lg:text-4xl mb-10 text-white">
            About CHMB Token
          </h2>
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <p className="text-xl lg:text-3xl text-[#539369] leading-10 lg:leading-[60px]">
            CHMB is Chumbi Valley's on-chain token and is deeply tied into every
            aspect of the Chumbi ecosystem. CHMB will facilitate gamers and
            investors alike to get the most out of their journey through the
            valley by giving access to a variety of future opportunities,
            products and features.
          </p>
          <div className="relative group cursor-pointer mt-10 w-full max-w-xs">
            <div className="relative">
              <Image className="w-full" src={Border} alt="Gallery" />
              <a
                className="absolute inset-0 group-hover:scale-105 duration-700 flex items-center justify-center text-xl lg:text-3xl text-white"
                href=""
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default abouttoken;
