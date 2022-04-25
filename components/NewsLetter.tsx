import React, { FC } from "react";
import SubHeading from "./SubHeading";

const NewsLetter: FC = () => {
  return (
    <div className="py-8 px-0 border-none sm:py-8 sm:px-16 sm:border sm:border-solid border-golden bg-black">
      <div className="text-center">
        <SubHeading title="Newsletter" />
        <h1 className="font-base text-golden text-4xl sm:text-6xl tracking-wider capitalize">
          Subscribe To Our Newsletter
        </h1>
        <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
          And never miss latest Updates!
        </p>
      </div>

      <div className="flex justify-center items-center mt-12 flex-col md:flex-row w-full">
        <input
          type="email"
          placeholder="Enter your e-mail address"
          className="w-full md:w-[620px] border border-solid border-golden rounded-md text-base font-base text-white mt-0 mr-0 mb-8 ml-0 md:mr-8 md:mb-0 py-3 px-4 bg-black"
        />
        <button
          type="submit"
          className="bg-crimson text-black font-base font-bold tracking-wider text-base py-3 px-6 rounded-sm border-0 outline-0 cursor-pointer w-max"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
