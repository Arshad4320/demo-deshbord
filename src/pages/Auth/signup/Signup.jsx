import { useForm } from "react-hook-form";

import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/img1.jpg";
import { AuthProvider } from "./../../../Context/AuthContext";
import { toast } from "react-toastify";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const [signUpError, setSignUPError] = useState("");
  const { createUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      // User API
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "https://bike-server-seven.vercel.app/user",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSignUPError("");

      const createUserResult = await createUser(data.email, data.password);
      const userResult = createUserResult.user;
      console.log(userResult);
      toast.success("User created successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      setSignUPError("something went wrong");
    }
  };

  return (
    <div className="w-[70%] mx-auto ">
      <div className=" my-20 bg-white  px-24  shadow-sm grid  grid-cols-1 md:grid-cols-2 gap-10">
        <div className="py-12">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Sign Up To Your Account
            </h2>
            <p className="text-justify mb-4 text-[16px]">
              Welcome Back! By clicking the sign-up button, you agree to
              Zenitood Terms and Service and acknowledge the Privacy and Policy
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="font-medium text-gray-700" htmlFor="name">
                  Name*
                </label>
                <input
                  className="border w-full outline-secondary bg-gray-100 rounded-md px-2 py-2 duration-500 mt-2 font-semibold"
                  {...register("name")}
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="font-medium text-gray-700" htmlFor="email">
                  Email*
                </label>
                <input
                  className="border w-full outline-secondary bg-gray-100 rounded-md px-2 py-2 duration-500 mt-2 font-semibold"
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="font-medium text-gray-700" htmlFor="password">
                  Password*
                </label>
                <input
                  className="border w-full outline-secondary bg-gray-100 rounded-md px-2 py-2 duration-500 mt-2 font-semibold"
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                />
              </div>
              {signUpError && <p className="text-red-500">{signUpError}</p>}
              <div>
                <button
                  type="submit"
                  className="bg-primary w-2/3 mx-auto cursor-pointer  mt-8 text-center text-white hover:bg-[#D4E9FF] hover:text-gray-800 px-4 py-2 rounded-md "
                >
                  Sign Up
                </button>
              </div>
              <p className="text-gray-800 text-center text-[16px] my-4 font-medium">
                Already have an account ?
                <Link
                  to="/signin"
                  className="underline text-primary duration-300"
                >
                  Signin
                </Link>
              </p>
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

export default Signup;
