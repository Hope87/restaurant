import React, { FC } from "react";
import Image from "next/image";
import FooterOverlay from "./FooterOverlay";
import NewsLetter from "./NewsLetter";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import images from "../constants/images";

const Footer: FC = () => {
  return (
    <div className="pt-0 px-0 pb-8 sm:py-16 sm:px-8 sm:p-16 md:py-16 md:px-24 w-full relative z-[1] justify-start items-center flex-col bg-black">
      <FooterOverlay />
      <NewsLetter />

      <div className="w-full flex justify-between sm:items-start sm:flex-row p-0 mt-20 sm:py-0 sm:px-8 items-center flex-col">
        <div className="flex-1 sm:m-4 text-center my-8 mx-0 w-full">
          <h1 className="font-base text-white font-normal tracking-wider capitalize text-3xl mb-4">Contact Us</h1>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
            +1 212-344-1230
          </p>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
            +1 212-555-1230
          </p>
        </div>

        <div className="flex-1 sm:m-4 text-center my-8 mx-0 w-full">
          <Image src={images.gericht} alt="footer_logo" width={210} height={60}/>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <Image src={images.spoon} alt="spoon" width={45} />
          <div className="mt-2 flex justify-center items-center">
            <FiFacebook className="text-white m-2 text-2xl cursor-pointer hover:text-golden"/>
            <FiTwitter className="text-white m-2 text-2xl cursor-pointer hover:text-golden"/>
            <FiInstagram className="text-white m-2 text-2xl cursor-pointer hover:text-golden"/>
          </div>
        </div>

        <div className="flex-1 sm:m-4 text-center my-8 mx-0 w-full">
        <h1 className="font-base text-white font-normal tracking-wider capitalize text-3xl mb-4">Working Hours</h1>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
          Monday-Friday:
          </p>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize mb-4">
          08:00 am - 12:00 am
          </p>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
          Saturday-Sunday:
          </p>
          <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
          07:00 am - 11:00 pm
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="font-alt text-white font-normal tracking-wider text-base capitalize">
          2021 Gericht. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
