"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { validateSignUpField } from "@/app/lib/definitions";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [full_name, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [pending, setPending] = useState<Boolean>(false);
  const state = validateSignUpField(
    full_name,
    email,
    password,
    confirmpassword
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state) {
      setPending(true);
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ full_name, email, password }),
        });

        // Signup successful, redirect to signin page or show a success message
        const data = await response.json();
        if (data.body.message == "user exists") {
          toast({
            title: "Email already registered",
            description: "Please Log in as you have already registered before",
            variant: "destructive",
          });
          router.push("/login");
        }
      } catch (error) {
        console.error("Error signing up:", error);
      } finally {
        setPending(false);
      }
    }
  };
  return (
    <>
      <section className="flex xl:justify-between h-screen justify-center bg-white text-black w-screen overflow-hidden">
        <div className="flex flex-col w-[55%] items-center h-screen justify-center">
          <div className="flex flex-col items-center">
            <Image src="/Logo.svg" alt="" width={100} height={100} />
            <h1 className="text-brand-1 font-extrabold text-4xl">Yotor</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-2xl font-semibold text-nowrap">
                  Let{"'"}s Get Started 🚀
                </h1>
                <p className="text-[16px] text-nowrap">Sign up your account</p>
              </div>

              <div className="flex flex-col gap-1">
                <Link
                  href=""
                  className="w-[400px] flex items-center justify-center gap-2 rounded-lg border border-red-600 py-1"
                >
                  <Image
                    src="/signUpPageIcons/google.svg"
                    alt="google_icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-[12px] text-red-600">
                    continue with google
                  </p>
                </Link>
                <Link
                  href=""
                  className="w-[400px] flex items-center justify-center gap-1 rounded-lg border border-blue-600 py-1"
                >
                  <Image
                    src="/signUpPageIcons/facebook.svg"
                    alt="facebook_icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-[12px] text-blue-600">
                    continue with facebook
                  </p>
                </Link>
                <Link
                  href=""
                  className="w-[400px] flex items-center justify-center gap-1 rounded-lg border border-gray-600 py-1"
                >
                  <Image
                    src="/signUpPageIcons/github.svg"
                    alt="github_icon"
                    width={15}
                    height={15}
                  />
                  <p className="text-[12px] text-gray-600">
                    continue with github
                  </p>
                </Link>
                <div className="flex items-center justify-center gap-1 rounded-lg">
                  <Image src="" alt="" width={10} height={10} />
                  <p></p>
                </div>
              </div>
            </div>
            <form
              className="flex flex-col gap-3 mt-5"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="w-[400px] flex bg-[#f3f4f6] items-center justify-center gap-3 pl-3 rounded-lg">
                <Image
                  src="/personIcon.svg"
                  alt="name"
                  width={15}
                  height={15}
                  className="w-[15px]"
                />
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className={clsx(
                    "p-2 text-sm h-[35px] w-[calc(100%-30px)] bg-[#f3f4f6]",
                    state?.errors?.full_name
                      ? "border border-red-700 rounded-lg"
                      : "border-green-700"
                  )}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  placeholder="Enter your full name here"
                />
              </div>
              {state?.errors?.full_name ? (
                <p className="text-[11px] text-red-700">
                  {state.errors.full_name}
                </p>
              ) : (
                <p className="">Seems good now</p>
              )}
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
                  className={clsx(
                    "p-2 text-sm h-[35px] w-[calc(100%-30px)] bg-[#f3f4f6]",
                    state?.errors?.email
                      ? "border border-red-700 rounded-lg"
                      : "border-green-700"
                  )}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email here"
                />
              </div>
              {state?.errors?.email && (
                <p className="text-[11px] text-red-700">{state.errors.email}</p>
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className={clsx(
                    "p-2 text-sm h-[35px] w-[calc(100%-30px)] bg-[#f3f4f6]",
                    state?.errors?.password
                      ? "border border-red-700 rounded-lg"
                      : "border-green-700"
                  )}
                  onChange={(e) => {
                    {
                      setPassword(e.target.value);
                    }
                  }}
                  placeholder="strong password"
                />
                <Image
                  src={!showPassword ? "/eye.svg" : "eyeSlash.svg"}
                  alt="password"
                  width={15}
                  height={15}
                  className="w-[15px] cursor-pointer"
                  onClick={(e) => {
                    setShowPassword((item) => !item);
                  }}
                />
              </div>
              {state?.errors?.password && (
                <p className="text-[11px] text-red-700">
                  {state.errors?.password[0]}
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
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  id="confirm_password"
                  className={clsx(
                    "p-2 text-sm h-[35px] w-[calc(100%-30px)] bg-[#f3f4f6]",
                    state?.errors?.confirm_password
                      ? "border border-red-700 rounded-lg"
                      : "border-green-700"
                  )}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="strong and same password"
                />
                <Image
                  src={!showConfirmPassword ? "/eye.svg" : "eyeSlash.svg"}
                  alt="password"
                  width={15}
                  height={15}
                  className="w-[15px] cursor-pointer"
                  onClick={(e) => {
                    setShowConfirmPassword((item) => !item);
                  }}
                />
              </div>
              {state?.errors?.confirm_password && (
                <p className="text-[11px] text-red-700">
                  {state.errors?.confirm_password[0]}
                </p>
              )}
              <button
                type="submit"
                className={clsx(
                  "w-[400px] py-2 rounded-lg text-white",
                  pending ? "bg-gray-800" : "bg-black "
                )}
              >
                {pending ? "signinig you up" : "Sign Up"}
              </button>
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
                Already have an account{"?  "}
                <Link href="/login" className="text-teritiary-1">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/sign_up_photo.png"
          alt="sign-up-photo"
          width={2000}
          height={1920}
          className="hidden xl:block w-[45%]"
        />
      </section>
    </>
  );
};

export default page;
