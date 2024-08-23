"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Elements/Navbar";
import { Carousel } from "./constants";
import clsx from "clsx";
import Hero from "./sections/Hero";
import Courses from "./sections/Courses";
import ComingSoon from "./sections/ComingSoon";
import { Testimonals } from "./sections/Testimonals";
import ContactUs from "./sections/ContactUs";
// import {
//   Hero,
//   Courses,
//   ComingSoon,
//   Testimonals,
//   ContactUs,
// } from "./sections/index";

export default function Home() {
  const [value, setValue] = useState<number>(0);
  const [toogled, setToogled] = useState<Boolean>(false);
  useEffect(() => {
    // Set a timeout to change the value after 3 seconds
    const timeoutId = setTimeout(() => {
      setValue((value + 1) % 4);
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);
  return (
    <main className="overflow-hidden select-none flex flex-col">
      <section>
        <Navbar isToogled={toogled} handleToogle={setToogled} />
      </section>
      <section>
        <Hero isToogled={toogled} value={value} />
      </section>

      <section id="courses">
        <Courses isToogled={toogled} />
      </section>

      <section id="coming_soon">
        <ComingSoon isToogled={toogled} />
      </section>
      <section id="testimonals">
        <Testimonals isToogled={toogled} />
      </section>
      <section id="contact_us">
        <ContactUs isToogled={toogled} />
      </section>
    </main>
  );
}
