import { useForm } from "react-hook-form";
import img from "../../../assets/img1.jpg";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthProvider } from "../../../Context/AuthContext";
import swal from "sweetalert"; // assuming you are using sweetalert
import { toast } from "react-toastify";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const { loginUser, user } = useContext(AuthProvider);
  const location = useLocation();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
    toast.success("Successfully logged in");
  }
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="w-[70%] mx-auto">
      <div className="my-20 bg-white px-24 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="py-12">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Log In To Your Account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="font-medium text-gray-700" htmlFor="email">
                  Email*
                </label>
                <input
                  className="border w-full outline-secondary bg-gray-100 rounded-md px-2 py-2 duration-500 mt-2 font-semibold"
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                  id="email"
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
                  id="password"
                />
              </div>
              <div>
                {/* <Button className={"w-2/3 mx-auto"} props={"Sign In"} /> */}
                <button
                  type="submit"
                  className="bg-primary   mt-8 text-center text-white hover:bg-[#D4E9FF] hover:text-gray-800 px-4 py-2 rounded-md "
                >
                  Sign In
                </button>
                <p className="text-gray-800 text-center text-[16px] my-4 font-medium">
                  Don’t Have an Account?
                  <Link
                    to="/signup"
                    className="underline text-primary duration-300"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
              <p className="text-red-500">{error}</p>
            </form>
          </div>
        </div>
        <div className="relative">
          <div className="bg-black opacity-80 z-10 rounded-md w-60 h-32 absolute left-24 bottom-0 top-60"></div>
          <div className="relative left-32 bottom-0 top-64 z-20">
            <p className="text-primary text-lg font-semibold">Create Account</p>
            <p className="text-secondary text-lg font-semibold">
              Fill in Your Information
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="rounded-lg w-full h-full border-primary border absolute left-0 bottom-0 top-0 right-0" />
            <img src={img} alt="" className="h-[500px] blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
