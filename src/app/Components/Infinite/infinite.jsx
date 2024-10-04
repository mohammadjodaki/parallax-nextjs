import Image from "next/image";
import React from "react";

function infinite() {
  return (
    <div className="-mt-20">
      <video
        poster="https://assets.awwwards.com/awards/element/2023/10/652945f2b221f380841930_static.jpeg"
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "auto" }}
      >
        <source
          src="https://assets.awwwards.com/awards/element/2023/10/652945f2b221f380841930.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="w-full flex justify-between flex-wrap px-10 lg:px-24 py-20">
        <h2 className="w-full lg:w-1/4 text-4xl lg:text-6xl mb-10 text-white" data-aos="fade-up" data-aos-duration="3000">What are chombi</h2>
        <p className="w-full lg:w-3/4 text-xl lg:text-3xl text-[#539369] leading-10 lg:leading-[60px]" data-aos="fade-up" data-aos-duration="3000">
          Chumbi /chumm-bee/ are mystical, elemental NFT creatures who will be
          your most loyal and loving companions as you journey through the
          valley. Breed and raise new Chumbi on your farm and set out together
          to unlock every item, feature and secret this enchanting world has to
          offer.
        </p>
      </div>
    </div>
  );
}

export default infinite;
