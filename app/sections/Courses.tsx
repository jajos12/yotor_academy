import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseCard from "../Elements/CourseCard";
import clsx from "clsx";

const Courses = ({ isToogled }: { isToogled: Boolean }) => {
  return (
    <>
      <section
        className={clsx(
          "flex p-5 flex-col h-[600px] items-center justify-center",
          isToogled ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
        )}
      >
        <div className="flex justify-center gap-5 pb-20">
          <Image src="LeftDash.svg" alt="leftDash" width={225} height={2} />
          <h1 className="text-3xl font-bold text-nowrap">
            Our <span className="text-brand-1">Courses</span>
          </h1>
          <Image src="RightDash.svg" alt="rightDash" width={225} height={2} />
        </div>
        <CourseCard />
      </section>
      <Image
        src={isToogled ? "CoursesGraphicsDark.svg" : `CoursesGraphics.svg`}
        alt="CourseGraphicsSeparator"
        width={1920}
        height={1080}
        className="w-screen h-auto"
      />
    </>
  );
};

export default Courses;
