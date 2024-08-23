import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Finished } from "./CourseCard";

const NoCourses = () => {
  return (
    <div className="flex flex-col sm:gap-10 items-center gap-5">
      <p className="italic px-10">
        "The only limit to our realization of tomorrow will be our doubts of
        today." - Franklin D. Roosevelt
      </p>
      <Image
        src="/noFinishedCourses.png"
        alt="no-courses"
        width={500}
        height={500}
      />
      <div className="md:w-[700px] w-[70%] flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-blue-600 text-2xl font-bold">
            Haven{"’"}t enrolled any course yet
          </h1>
          {/* <div className="flex gap-2 flex-col md:flex-row">
            <Image src="/worry.png" alt="" width={70} height={70} />
            <p className="text-[14px]">
              Don{"’"}t worry just pick any courses you like and join the
              learning experience, let{"’"}s smash it
            </p>
          </div> */}
          <div className="flex gap-2 flex-col md:flex-row">
            {/* <Image src="/quiz.png" alt="" width={70} height={70} /> */}
            <p className="text-[14px]">
              Oh, seems you are working on finishing your courses, your finished
              courses will appear here as soon as you finished them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnrolledCourses = () => {
  const enrolledCourses = false;
  return (
    <section className="flex flex-col items-center bg-gray-100 w-screen p-5">
      <h1 className="text-white text-2xl font-bold m-5 bg-black w-[250px] text-center rounded-md">
        Finished Courses
      </h1>
      {!enrolledCourses ? (
        <NoCourses />
      ) : (
        <>
          <Finished />
        </>
      )}
    </section>
  );
};

export default EnrolledCourses;
