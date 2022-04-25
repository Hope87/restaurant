import { NextPage } from "next";
import Image from 'next/image'
import Link from "next/link";
import React from "react";
import images from "../constants/images";

const About: NextPage = () => {
  return (
    <div className="relative bg-bg-img bg-center bg-cover bg-repeat bg-at bg-fixed flex justify-center items-center py-16 px-24">
      <div className="hidden absolute inset-0 sm:flex justify-center items-center">
          <Image src={images.G} alt="g letter" width={391} height={415}/>
      </div>

      <div className="w-full z-10 flex justify-center items-center flex-col md:flex-row">
          <div className="flex flex-1 justify-end items-end flex-col text-right">
              <h1 className=" font-base text-golden text-6xl tracking-wider capitalize">About Us</h1>
              <Image src={images.spoon} alt="spoon" width={45} />
              <p className="font-alt text-grey my-8 mx-0 font-normal tracking-wider capitalize text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              <Link href="/intro" passHref>
                <a className="bg-crimson text-black font-base font-bold tracking-wider text-base py-2 px-12 rounded-sm border-0 outline-0 cursor-pointer">Intro</a>
              </Link>
          </div>

          <div className="my-8 mx-16">
              <Image src={images.knife} alt="knife" height={910}/>
          </div>

          <div className="flex flex-1 justify-start items-start flex-col text-left">
              <h1 className=" font-base text-golden text-6xl tracking-wider capitalize">Our History</h1>
              <Image src={images.spoon} alt="spoon" width={45}/>
              <p className="font-alt text-grey my-8 mx-0 font-normal tracking-wider capitalize text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              <Link href="/gallery" passHref><a className="bg-crimson text-black font-base font-bold tracking-wider text-base py-2 px-10 rounded-sm border-0 outline-0 cursor-pointer">Gallery</a></Link>
          </div>
      </div>
    </div>
  );
};

export default About;
