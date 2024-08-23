import Image from "next/image";
import React from "react";
import { socialMedia } from "../constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ContactUs = ({ isToogled }: { isToogled: Boolean }) => {
  return (
    <section
      className={cn(
        "contact w-screen h-[1500px] md:h-[870px] relative",
        isToogled ? "text-white" : "text-black"
      )}
    >
      <style jsx global>
        {`
          .contact {
            background-image: ${
              !isToogled ? "url('Contactus.png');" : "url('ContactusDark.png');"
            }
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
      <div className="absolute top-[55%] py-5 flex flex-col md:flex-row w-screen md:justify-around gap-16">
        <div className="order-1 md:order-2 flex gap-5 flex-col items-center">
          <h1 className="text-3xl font-bold">
            Contact <span className="text-brand-1">Us</span>
          </h1>
          <label htmlFor="email" className="flex flex-col gap-3">
            <p className="text-lg">Email</p>
            <input
              type="email"
              name="email"
              id="email"
              className="h-10 w-[300px] rounded-2xl px-5 text-sm"
              placeholder="your email goes here..."
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-3">
            <p className="text-lg">Message</p>
            <textarea
              rows={10}
              cols={30}
              name="message"
              id="message"
              className="h-24 rounded-2xl text-sm text-start py-2 px-3"
              placeholder="write as anything you want us to know..."
            />
          </label>
          <button className="bg-secondary-1 transition duration-150 delay-200 hover:bg-secondary-2 h-[30px] rounded-xl flex items-center justify-center p-5">
            Send message
          </button>
        </div>
        <div className="flex flex-col h-[300px] md:justify-between gap-10 order-2 md:order-1 items-center">
          <div>
            <Image
              src={isToogled ? "/Logo.svg" : "/LogoFooter.png"}
              alt="logo"
              width={150}
              height={150}
            />
            <h1 className="text-2xl">
              <span className="text-brand-1 font-boldP">Yotor</span> Academy
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <Image
                src={!isToogled ? "/phoneDark.svg" : "/phone.svg"}
                alt="phone_number_icon"
                width={20}
                height={20}
              />
              <p>+251933325080</p>
            </div>
            <div className="flex gap-4">
              <Image
                src={!isToogled ? "/emailDark.svg" : "/email.svg"}
                alt="mail_box_icon"
                width={20}
                height={20}
              />
              <p>yotorcoder@gmail.com</p>
            </div>
            <div className="flex gap-4">
              {socialMedia.map((medias, index) => (
                <Link href={medias.url} key={index}>
                  <Image
                    src={
                      !isToogled
                        ? `${medias.lightIcon}Dark.svg`
                        : `${medias.lightIcon}.svg`
                    }
                    alt={medias.label}
                    width={25}
                    height={25}
                  />
                </Link>
              ))}
              {/* <Image src="" alt="" width={50} height={50} />
              <Image src="" alt="" width={50} height={50} />
              <Image src="" alt="" width={50} height={50} />
              <Image src="" alt="" width={50} height={50} />
              <Image src="" alt="" width={50} height={50} />
              <Image src="" alt="" width={50} height={50} /> */}
            </div>
          </div>
        </div>
        {/* <p>Yotor Academy</p> */}
      </div>
    </section>
  );
};

export default ContactUs;
