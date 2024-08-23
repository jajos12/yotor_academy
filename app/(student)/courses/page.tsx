import React from "react";
// import EnrolledCourses from "../Elements/student/EnrolledCourses";
// import FinishedCourses from "../Elements/student/FinishedCourses";
// import AllCourses from "../Elements/student/AllCourses";
import dynamic from "next/dynamic";

const EnrolledCourses = dynamic(
  () => import("../../Elements/student/EnrolledCourses"),
  { ssr: false }
);
const FinishedCourses = dynamic(
  () => import("../../Elements/student/FinishedCourses"),
  { ssr: false }
);
const AllCourses = dynamic(() => import("../../Elements/student/AllCourses"), {
  ssr: false,
});
const page = () => {
  return (
    <main className="flex flex-col p-10 items-center bg-white w-screen overflow-x-hidden select-none">
      <EnrolledCourses />
      <FinishedCourses />
      <AllCourses />
    </main>
  );
};

export default page;
