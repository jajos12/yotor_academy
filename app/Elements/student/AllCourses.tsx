import Image from "next/image";
import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <div className="h-[400px] w-[330px] rounded-[50px] border border-black flex flex-col items-center py-2 gap-2">
      <Image
        src="/Thinking Person Dark.svg"
        alt=""
        className="rounded-[40px] border border-black w-[300px] h-[200px]"
        width={300}
        height={200}
      />
      <div className="flex gap-1 items-center justify-start">
        <Image
          src="/personIcon.svg"
          alt=""
          width={30}
          height={30}
          className="bg-gray-300 rounded-full"
        />
        <h1>Course Name</h1>
      </div>
      <p>Course Duration: 2 months/24 sessions</p>
      <div className="flex flex-col gap-2">
        <Link
          href=""
          className="w-[150px] bg-[#007AFF] rounded-lg text-center text-white py-1"
        >
          More...
        </Link>
        <Link
          href=""
          className=" bg-[#87ED06] rounded-lg text-center text-black py-1"
        >
          Enroll
        </Link>
      </div>
    </div>
  );
};

const AllCourses = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <h1 className="text-white text-2xl font-bold m-5 bg-black w-[250px] text-center rounded-md">
        Explore Courses
      </h1>
      <div className="w-screen flex flex-wrap gap-5 items-center justify-center pt-10 px-10">
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
      </div>
    </div>
  );
};

export default AllCourses;
