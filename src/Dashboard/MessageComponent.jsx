import React from "react";
import Heading from "./components/Heading";

const MessageComponent = () => {
  return (
    <div className=" bg-white p-6  m-8">
      <div className="flex justify-between">
        <div>
          <div>
            <Heading props={" I'm Looking for Massage Therapist Near..."} />
          </div>
          <div>
            <p className="text-gray-800 font-medium text-lg mt-4">
              In using this site, I agree to be bound by the{" "}
              <span className="text-primary border-primary border-b">
                Terms of Service
              </span>{" "}
              <br /> and{" "}
              <span className="text-primary border-b border-primary">
                Privacy Policy
              </span>
            </p>
          </div>
          <div className="my-10 flex">
            <input
              className="bg-secondary rounded-md p-3  rounded-r-none outline-none "
              type="text"
              placeholder="ZIP code or city name "
            />
            <button className="bg-primary px-6 rounded-md rounded-l-none py-2 text-white">
              Go
            </button>
          </div>
        </div>
        <div>img div</div>
      </div>
    </div>
  );
};

export default MessageComponent;
