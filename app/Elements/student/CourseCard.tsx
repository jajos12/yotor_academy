"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Enrolled = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial set

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2  border border-black w-[300px] md:w-fit rounded-[50px] md:flex-row md:items-center md:justify-around">
      <div className="flex flex-col gap-10 mt-5 mx-8 items-center">
        <div className="flex md:flex-row flex-col items-center gap-3">
          <Image
            src="/Contactus.png"
            alt="course"
            width={200}
            height={80}
            className="rounded-[50px] w-[350px] h-[150px] md:w-[150px] border border-black"
          />
          <h1 className="text-2xl font-bold text-nowrap">
            Front End development
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-[200px] md:w-[350px] bg-black h-3 rounded-md">
              <div className="w-[50%] bg-[#ff2929] h-3 rounded-md"></div>
            </div>
            <p>50%</p>
          </div>
          <p>Overall Progress</p>
        </div>
      </div>
      {screenWidth < 768 ? (
        <Image
          src={"/delimiterLineOnsmall.svg"}
          alt="delimiterLine"
          width={300}
          height={50}
          className="w-[100%]"
        />
      ) : (
        <Image
          src={"/delimiterLine.svg"}
          alt="delimiterLine"
          width={50}
          height={50}
        />
      )}

      <div className="m-5 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col gap-1">
          <p>Where You have Left</p>
          <p className="text-[#007AFF]">Mini-project 7</p>
        </div>
        <Link href="" className="bg-[#ff2929] rounded-[10px] p-2 w-[150px]">
          Go to the course
        </Link>
      </div>
    </div>
  );
};

export const Finished = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial set

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2  border border-black w-[300px] md:w-fit rounded-[50px] md:flex-row md:items-center md:justify-around">
      <div className="flex flex-col gap-10 mt-5 mx-8 items-center">
        <div className="flex md:flex-row flex-col items-center gap-3">
          <Image
            src="/Contactus.png"
            alt="course"
            width={200}
            height={80}
            className="rounded-[50px] w-[350px] h-[150px] md:w-[150px] border border-black"
          />
          <h1 className="text-2xl font-bold text-nowrap">
            Front End development
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-[200px] md:w-[350px] bg-black h-3 rounded-md">
              <div className="w-[50%] bg-[#ff2929] h-3 rounded-md"></div>
            </div>
            <p>50%</p>
          </div>
          <p>Overall Progress</p>
        </div>
      </div>
      {screenWidth < 768 ? (
        <Image
          src={"/delimiterLineOnsmall.svg"}
          alt="delimiterLine"
          width={300}
          height={50}
          className="w-[100%]"
        />
      ) : (
        <Image
          src={"/delimiterLine.svg"}
          alt="delimiterLine"
          width={50}
          height={50}
        />
      )}

      <div className="m-5 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col gap-1">
          <p>Where You have Left</p>
          <p className="text-[#007AFF]">Mini-project 7</p>
        </div>
        <Link href="" className="bg-[#ff2929] rounded-[10px] p-2 w-[150px]">
          Go to the course
        </Link>
      </div>
    </div>
  );
};
