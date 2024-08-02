import { useForm } from "react-hook-form";
// import ButtonComponent from "./../../../components/Button/ButtonComponent";
import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" my-20 bg-white mx-auto p-10 border rounded-md shadow-sm w-full md:w-1/3">
      <h2 className="text-2xl font-semibold mb-3">Sign Up</h2>
      <p className="text-gray-800 text-[16px] mb-3 font-medium">
        Already have an account ?
        <Link to="user/login" className="underline text-secondary duration-300">
          Login
        </Link>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Name*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Address*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("address")}
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Email*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("email")}
            placeholder="Email"
            type="email"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Password*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("password")}
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="text-gray-600 flex justify-between text-[16px] font-medium my-3">
          <h4 className="">Stay signed in</h4>
          <h4>Forgot your password?</h4>
        </div>
        <div>
          {/* <ButtonComponent
            className={"w-full"}
            label={"Sign In"}
            type="submit"
          /> */}
          <button>Submit</button>
        </div>{" "}
      </form>
    </div>
  );
};

export default Register;
