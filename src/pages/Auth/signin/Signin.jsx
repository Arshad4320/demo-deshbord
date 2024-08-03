import { useForm } from "react-hook-form";
import img from "../../../assets/img1.jpg";
import React from "react";
import { Link } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import Button from "./../../../Dashboard/components/Button";

const Signin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-[70%] mx-auto ">
      <div className=" my-20 bg-white  px-24  shadow-sm grid  grid-cols-1 md:grid-cols-2 gap-10">
        <div className="py-12">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Log In To Your Account
            </h2>
            <p className="text-justify mb-4 text-lg">
              Welcome Back! Select a method to log in:
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-secondary   mt-8 text-center text-gray-700  hover:text-gray-800 px-4 py-2 rounded-md">
                Google
              </button>
              <Button props={"Facebook"} />
            </div>
            <p className="text-gray-700 text-center my-2">
              Or Continue with Email
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="font-medium text-gray-700" htmlFor="name">
                  Email*
                </label>
                <input
                  className="border w-full   outline-secondary bg-gray-100 rounded-md px-2 py-2 duration-500 mt-2 font-semibold"
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="font-medium text-gray-700" htmlFor="name">
                  Password*
                </label>
                <input
                  className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-2 duration-500 mt-2 font-semibold"
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div>
                {/* <ButtonComponent
            className={"w-full"}
            label={"Sign In"}
            type="submit"
          /> */}

                <Button className={"w-2/3 mx-auto"} props={"Sign In"} />
                <p className="text-gray-800 text-center text-[16px] my-4 font-medium">
                  Don’t Have an Account?
                  <Link
                    to="/signup"
                    className="underline text-primary duration-300"
                  >
                    Create Account
                  </Link>
                </p>
              </div>{" "}
            </form>
          </div>
        </div>
        <div className="relative  ">
          <div className="bg-black opacity-80 z-10  rounded-md w-60 h-32  absolute  left-24 bottom-0 top-60"></div>
          <div className=" relative   left-32 bottom-0 top-64 z-20">
            <p className="text-primary text-lg  font-semibold">
              Create Account
            </p>
            <p className="text-secondary text-lg font-semibold">
              Fill in Your Information
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="   rounded-lg w-full h-full border-primary border absolute  left-0 bottom-0 top-0 right-0" />
            <img src={img} alt="" className=" h-[500px] blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
