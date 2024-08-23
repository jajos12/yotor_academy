"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NavBarLinks } from "../constants";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = ({
  isToogled,
  handleToogle,
}: {
  isToogled: Boolean;
  handleToogle: (isToogled: Boolean) => void;
}) => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <nav
      className={clsx(
        "w-100 h-[80px] px-6 py-4 flex xl:justify-between justify-between transition duration-200 delay-75 ease-out",
        isToogled ? "bg-black" : "bg-white"
      )}
    >
      <div className="flex gap-4 cursor-pointer">
        <Image
          src={`${isToogled ? "DarkLogo.svg" : "Logo.svg"}`}
          alt="logo"
          width={133}
          height={44}
        />
        <h1 className="text-brand-1 font-extrabold text-[35px]">Yotor</h1>
      </div>

      <Sheet>
        <SheetTrigger>
          <Image
            src={`Menu.svg`}
            alt="menu"
            width={30}
            height={30}
            className="lg:hidden cursor-pointer"
            onClick={() => {
              setMenuClicked(!menuClicked);
            }}
          />
        </SheetTrigger>
        <SheetContent
          side="top"
          className={clsx(
            isToogled ? "bg-black text-white" : "bg-white text-black"
          )}
        >
          <SheetHeader>
            <SheetTitle>Navigate To -- </SheetTitle>
            {NavBarLinks.map((item, index) => (
              <Link
                href={`#${item.replaceAll(" ", "_").toLocaleLowerCase()}`}
                key={index}
                className={clsx(
                  "flex justify-center items-center rounded-[12px] p-3 text-nowrap  transition ease-in-out delay-150 hover:scale-110 hover:translate-y-1 hover:bg-brand-2 hover:drop-shadow-sm hover:",
                  isToogled ? "text-white" : "text-black"
                )}
              >
                {item}
              </Link>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <ul className="lg:flex xl:gap-10 gap-5 hidden">
        {NavBarLinks.map((item, index) => (
          <Link
            href={`#${item.replaceAll(" ", "_").toLocaleLowerCase()}`}
            onClick={() => {
              item.replaceAll(" ", "_").toLocaleLowerCase();
            }}
            key={index}
            className={clsx(
              "flex justify-center items-center bg-brand-1 rounded-[12px] xl:px-3 px-2 text-nowrap  transition ease-in-out delay-150 hover:scale-110 hover:translate-y-1 hover:bg-brand-1 hover:drop-shadow-sm",
              isToogled ? "text-white" : "text-black"
            )}
          >
            {item}
          </Link>
        ))}
        <Link
          href="/signup"
          className={clsx(
            "flex justify-center items-center rounded-[12px] px-3 py-1 text-nowrap  transition ease-in-out delay-150 hover:scale-110 hover:translate-y-1 hover:bg-black-300 hover:drop-shadow-sm hover:",
            isToogled ? "bg-white text-black" : "bg-black text-white"
          )}
        >
          SignUp {"-->"}
        </Link>

        <Image
          src={!isToogled ? "LighToogle.svg" : "DarkToogle.svg"}
          alt="toogleIcon"
          width={96}
          height={40}
          onClick={() => {
            handleToogle(!isToogled);
          }}
          className="cursor-pointer"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
