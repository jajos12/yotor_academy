import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Enrolled } from "./CourseCard";

const NoCourses = () => {
  return (
    <div className="flex flex-col sm:gap-10 items-center gap-5">
      <p className="italic px-10">
        "The beautiful thing about learning is that no one can take it away from
        you." - B.B. King
      </p>
      <Image
        src="/noEnrolledCourses.png"
        alt="no-courses"
        width={300}
        height={300}
      />
      <div className="md:w-[700px] w-[70%] flex flex-col gap-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-blue-600 text-2xl font-bold">
            Haven{"’"}t enrolled any course yet
          </h1>
          <div className="flex gap-2 flex-col md:flex-row">
            <Image src="/worry.png" alt="" width={70} height={70} />
            <p className="text-[14px]">
              Don{"’"}t worry just pick any courses you like and join the
              learning experience, let{"’"}s smash it
            </p>
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <Image src="/quiz.png" alt="" width={70} height={70} />
            <p className="text-[14px]">
              Ready to start learning? Begin by browsing our top recommended
              courses, or take our course recommendation quiz to find the
              perfect fit.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            href=""
            className="w-[250px] py-[2px] rounded-md bg-[#FFBA07] text-white text-center "
          >
            Take our quiz
          </Link>
          <Link
            href=""
            className="w-[250px] py-[2px] rounded-md bg-[#007AFF] text-white text-center "
          >
            Pick one of our courses
          </Link>
        </div>
      </div>
    </div>
  );
};

const EnrolledCourses = () => {
  const enrolledCourses = true;
  return (
    <section className="flex flex-col items-center gap-5 md:h-[650px] w-screen">
      <h1 className="text-white text-2xl font-bold bg-black w-[250px] text-center rounded-md">
        Enrolled Courses
      </h1>
      {!enrolledCourses ? (
        <NoCourses />
      ) : (
        <>
          <Enrolled />
          <Enrolled />
        </>
      )}
    </section>
  );
};

export default EnrolledCourses;
