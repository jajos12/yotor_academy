import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { comingSoon } from "../constants";
import clsx from "clsx";

const ComingSoon = ({ isToogled }: { isToogled: Boolean }) => {
  return (
    <section
      className={clsx(
        " flex flex-col items-center h-[650px]",
        isToogled ? "bg-black" : "bg-white"
      )}
    >
      <div className="flex justify-center items-center">
        <InfiniteMovingCards
          items={comingSoon}
          direction="right"
          speed="slow"
          isToogled={isToogled}
        />
      </div>
      <div>
        <Image
          src={!isToogled ? "Thinking Person Dark.svg" : "ThinkingPerson.svg"}
          alt="coming_Soon"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
};

export default ComingSoon;
