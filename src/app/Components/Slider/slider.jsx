"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Flame from "../../Images/flame.webp";
import FlameFront from "../../Images/front-flame.webp";
import River from "../../Images/river.webp";
import FrontRiver from "../../Images/front-river.webp";
import Forest from "../../Images/forestt.webp";
import FrontForest from "../../Images/front-forest.webp";
import Cave from "../../Images/cave.webp";
import FrontCave from "../../Images/front-cave.webp";
import Spark from "../../Images/spark.webp";
import FrontSpark from "../../Images/front-spark.webp";
import Mountain from "../../Images/mountainn.webp";
import FrontMountain from "../../Images/front-mountain.webp";
import Creature from "../../Images/creature.webp";
import FrontCreature from "../../Images/front-creature.webp";
import Spirit from "../../Images/spirit.webp";
import FrontSpirit from "../../Images/front-spirit.webp";
import Void from "../../Images/void.webp";
import FrontVoid from "../../Images/front-void.webp";
import Arr from "../../Images/arr.svg";
import { useRef } from "react";

function slider() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full px-5 lg:px-24">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        modules={[FreeMode]}
        className="w-full "
      >
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FlameFront} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Flame}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                FLAME
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontRiver} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={River}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                RIVER
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontForest} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Forest}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                FOREST
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontCave} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Cave}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                CAVE
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontSpark} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Spark}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                SPARK
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontMountain} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Mountain}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                MOUNTAIN
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontCreature} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Creature}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                CREATURE
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontSpirit} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Spirit}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                SPIRIT
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center cursor-pointer">
          <div className="relative">
            <div className="flex justify-center">
              <Image className="object-cover" src={FrontVoid} alt="flame" />
              <Image
                className="absolute top-5 md:top-10 lg:top-14"
                src={Void}
                alt="flame"
              />
              <h2 className="absolute bottom-5 lg:bottom-10 text-xl md:text-2xl lg:text-4xl text-white">
                VOID
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full relative z-40 flex justify-between items-center mt-10">
        <p className="text-xl lg:text-3xl text-[#305B3F]">15 types to discover</p>
        <div className="flex gap-5 lg:gap-10">
        <div
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-green-800 cursor-pointer flex items-center justify-center"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <Image className="w-full rotate-180" src={Arr} alt="arr" />
        </div>
        <div
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-green-800 cursor-pointer flex items-center justify-center"
          onClick={() => swiperRef.current.slideNext()}
        >
          <Image className="w-full" src={Arr} alt="arr" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default slider;
