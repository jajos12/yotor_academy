import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Carousel } from "../constants";
import Link from "next/link";
import { Boxes } from "@/components/ui/background-boxes";
import "./styles.css";
import { motion } from "framer-motion";

const Hero = ({ isToogled, value }: { isToogled: Boolean; value: number }) => {
  return (
    <>
      <style jsx global>{`
        .section {
          background-color: ${Carousel[value].colors.first};
        }
        .read_more {
          background-color: ${Carousel[value].colors.second};
        }
        .log-in {
          box-shadow: 0 4px 6px -1px ${Carousel[value].colors.second},
            0 2px 4px -1px ${Carousel[value].colors.second};
          box-shadow: 0 1px 3px 0 ${Carousel[value].colors.second},
            0 1px 2px 0 ${Carousel[value].colors.second};
        }
        .container {
          background-color: ${Carousel[value].colors.first};
        }
      `}</style>
      <section
        className={clsx(
          `section select-none flex justify-between py-8 pl-8 transition duration-300 bg-[${Carousel[value].colors.first}]`,
          !isToogled ? "text-black " : "text-white bg-black"
        )}
      >
        <div className="md:w-[65%] w-[70%] flex flex-col gap-10 pt-10">
          <h1 className="font-extrabold text-5xl">
            {/* <span className="text-brand-1">Yotor</span> Academy */}
          </h1>
          <h1 className="text-3xl font-mono">
            From{" "}
            <span
              className={`text-[#${Carousel[value].colors.first}] font-bold`}
            >
              {Carousel[value].text.first}
            </span>{" "}
            Become{" "}
            <span
              className={`text-[#${Carousel[value].colors.second}] font-bold`}
            >
              {" "}
              {Carousel[value].text.second}
            </span>
          </h1>
          <p>
            We are living in the 21st century where mastering a subject matter
            matters the most for any field. And if you are a tech enthusiast and
            aspiring to become expert in IT? starting from coding to developing
            enterprise level start up applications , here we are for you!
          </p>
          <div className="flex items-center gap-6">
            <Link
              href=""
              className="text-nowrap read_more hover:animate-snooze px-4 py-2  flex items-center justify-center rounded-[5px]"
            >
              Read More
            </Link>
            <Link
              href="/login"
              className="log-in text-nowrap hover:animate-bounce px-4 py-2 flex items-center justify-center rounded-[5px] border"
            >
              Log in
            </Link>
          </div>
        </div>
        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeatType: "loop",
            repeat: Infinity,
          }}
          className="containeraspect-square bg-black w-[300px] h-[300px] rounded-[50%] relative -right-[170px] top-[70px] xl:-right-[180px]"
        >
          <div className="bg-brand-1 w-[150px] aspect-square absolute rotating-divs -top-[70px] -left-[100px] rounded-[50%]"></div>
          <div className="bg-secondary-1 w-[150px] aspect-square absolute rotating-divs -bottom-[70px] -left-[100px] rounded-[50%]"></div>
          <div className="bg-black w-[150px] aspect-square absolute rotating-divs rounded-[50%] -bottom-[70px] -right-[100px]"></div>
          <div className="bg-white w-[150px] aspect-square absolute rotating-divs rounded-[50%] -top-[70px] -right-[100px]"></div>
        </motion.div>
      </section>
      <Image
        src={
          !isToogled
            ? `${Carousel[value].colors.image}`
            : `${Carousel[value].text.image}`
        }
        alt="line_graphics"
        width={1920}
        height={1080}
        className="w-screen h-auto"
      />
    </>
  );
};

export default Hero;
