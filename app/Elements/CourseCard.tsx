"use client ";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "./styles.css";
import clsx from "clsx";
import { courseCardData } from "../constants";

const CourseCard = () => {
  const activeSlide = useSwiperSlide();
  return (
    <Swiper
      grabCursor={true}
      className="w-screen"
      loop={true}
      slidesPerView={3}
      effect={"coverflow"}
      modules={[EffectCoverflow]}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {courseCardData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={clsx(
              "w-[100%] h-[100%] flex p-5 gap-10 flex-col items-center rounded-md",
              activeSlide && "bg-brand-1"
            )}
          >
            <Image src={item.imageUrl} alt="" width={50} height={50} />
            <div>
              <h2
                className={clsx(
                  "flex justify-center items-center text-2xl text-secondary-1 font-bold"
                )}
              >
                {item.header}
              </h2>
              <p>{item.description}</p>
              {item.links.map((button, place) => (
                <Link href="" key={place}>
                  button
                </Link>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseCard;
