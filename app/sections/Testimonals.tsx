"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Testimonals({ isToogled }: { isToogled: Boolean }) {
  return (
    <section
      className={cn(
        "testimonals h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden p-5",
        isToogled ? "bg-secondary-1" : "bg-secondary-1"
      )}
    >
      <style jsx global>
        {`
          .testimonals {
            // background-image: url("samplePhoto.jpg");
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
      <div className="rounded-[50%]">
        <Image
          className="rounded-[50%] w-[100px] md:w-[180px] aspect-square lg:w-[250px]"
          src="/samplePhoto.jpg"
          alt="photo"
          width={300}
          height={300}
        />
      </div>
      <div className="lg:w-[1900px] aspect-square md:w-[1000px] w-[700px] bg-brand-2 text-white relative -mt-16 rounded-[50%] ml-10 lg:-ml-20 lg:-mt-56">
        <div className="absolute left-[20%] md:left-[25%] top-[15%] flex justify-between">
          <h1 className="text-2xl lg:text-3xl text-white">
            Trainee Testimonals
          </h1>
          <span>
            <Image src="/Stars.svg" alt="" width={100} height={20} />{" "}
          </span>
        </div>
        <div className="absolute left-[20%] md:top-[19%] top-[23%] flex gap-5">
          <Image
            src="QuotationMark.svg"
            alt=""
            width={80}
            height={80}
            className="w-[40px] md:w-[80px] aspect-square"
          />
          <p className="lg:text-[20px] text-[15px] w-[50%] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <p className="absolute left-[30%] lg:top-[25%] top-[44%] md:top-[32%]">
          Habte Tsega, Co-founder of Yotor
        </p>
      </div>
    </section>
  );
}
// relative -right-[12%] lg:right-[1%] lg:-top-[25%] -top-[15%]
