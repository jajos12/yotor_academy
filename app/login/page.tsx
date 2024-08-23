"use client";
import { useToast } from "@/components/ui/use-toast";
import { validateLoginField } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

interface DataType {
  email: string;
  password: string;
}

const page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [data, setData] = useState<DataType>({ email: "", password: "" });
  const [pending, setPending] = useState<Boolean>(false);
  const [seeing, setSeeing] = useState<Boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setPending(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res.success) {
        router.push("/courses");
      } else {
        toast({
          title: `${res?.error}`,
        });
      }
    } catch (error) {
      toast({
        title: `${error}`,
      });
    } finally {
      setPending(false);
    }
  };
  const state = validateLoginField(data.email, data.password);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="flex xl:justify-between h-screen justify-center bg-white text-black items-center">
        <Image
          src="/loginPhoto.png"
          alt="sign-up-photo"
          width={440}
          height={410}
          className="hidden lg:block w-[440px] h-[410px] m-16"
        />
        <div className="flex flex-col py-10 w-[55%] items-center h-screen justify-center gap-16">
          <div className="flex flex-col items-center">
            <Image src="/Logo.svg" alt="" width={100} height={100} />
            <h1 className="text-brand-1 font-bold text-3xl">Yotor</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-3xl font-semibold">Welcome back 👋</h1>
                <p>Log in your account</p>
              </div>
            </div>
            <form
              className="flex flex-col gap-3 mt-5"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="w-[400px] flex bg-[#f3f4f6] items-center justify-center gap-3 pl-3 rounded-lg">
                <Image
                  src="/Mail.svg"
                  alt="email"
                  width={15}
                  height={15}
                  className="w-[15px]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 text-sm h-[35px] w-[calc(100%-30px)] bg-[#f3f4f6]"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {state?.errors?.email && (
                <p className="text-[11px] text-red-700">
                  {state.errors?.email[0]}
                </p>
              )}
              <div className="w-[400px] flex bg-[#f3f4f6] items-center justify-center gap-3 px-3 rounded-lg">
                <Image
                  src="/Lock.svg"
                  alt="password"
                  width={15}
                  height={15}
                  className="w-[15px]"
                />
                <input
                  type={seeing ? "text" : "password"}
                  name="password"
                  id="password"
                  className="p-2 text-sm h-[35px] w-[calc(100%-30px)] bg-[#f3f4f6]"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <Image
                  src={seeing ? "/eyeSlash.svg" : "/eye.svg"}
                  alt="password"
                  width={15}
                  height={15}
                  className="w-[15px] cursor-pointer"
                  onClick={(e) => {
                    setSeeing((eye) => !eye);
                  }}
                />
              </div>
              {state?.errors?.password && (
                <p className="text-[11px] text-red-700">
                  {state.errors?.password[0]}
                </p>
              )}
              <div className="flex justify-between">
                <p className="text-[10px] flex gap-1 items-center">
                  <input type="checkbox" className="cursor-pointer" />
                  Remember me
                </p>
                <Link href="" className="text-teritiary-1 text-[10px]">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-[400px] bg-black text-white py-2 rounded-lg"
              >
                {pending ? "submitting" : "continue"}
              </button>
              <div className="flex flex-col gap-2 justify-center items-center">
                <p>or continue with</p>
                <div className="flex gap-5 justify-center items-center">
                  <Link href="">
                    <Image
                      src="/signUpPageIcons/google.svg"
                      alt="google_icon"
                      width={20}
                      height={20}
                    />
                  </Link>

                  <Link href="">
                    <Image
                      src="/signUpPageIcons/facebook.svg"
                      alt="facebook_icon"
                      width={20}
                      height={20}
                    />
                  </Link>

                  <Link href="">
                    <Image
                      src="/signUpPageIcons/github.svg"
                      alt="github_icon"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-3 mt-4 items-center">
              <p className="text-[8px] w-[300px]">
                By continuing you agree to our Terms & Conditions and Privacy
                Policy
              </p>
              {/* <div>
              <Image src="/Logo.svg" alt="" width={100} height={100} />
              <h1 className="text-brand-1 font-bold text-2xl">Yotor</h1>
            </div> */}
              <p className="text-[10px]">
                Don{"'"}t have an account{"?  "}
                <Link href="/signup" className="text-teritiary-1">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
