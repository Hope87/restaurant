import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { SubHeading } from "../components";
import images from "../constants/images";

const Contact: NextPage = () => {
  return (
    <div className="bg-bg-img bg-center bg-cover bg-repeat bg-fixed flex justify-between items-center min-h-screen flex-col lg:flex-row py-16 px-8 sm:p-16 md:py-16 md:px-24">
        <div className="flex flex-1 w-full justify-center items-start flex-col">
           <SubHeading title="Contact"/>
           <h1 className=" font-base text-golden text-6xl tracking-wider capitalize mb-12">Find Us</h1>
           <div>
               <p className="font-alt text-white font-normal tracking-wider text-base capitalize">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
               <p className="font-base text-golden font-bold tracking-wider capitalize text-2xl my-8 mx-0">Opening Hours</p>
               <p className="font-alt text-white font-normal tracking-wider text-base capitalize">Mon - Fri: 10:00 am - 02:00 am</p>
               <p className="font-alt text-white font-normal tracking-wider text-base capitalize">Sat - Sun: 10:00 am - 03:00 am</p>
           </div>
           <button type="button" className="bg-crimson text-black font-base font-bold tracking-wider text-base py-2 px-6 rounded-sm border-0 outline-0 cursor-pointer mt-8">Visit Us</button>
        </div>

        <div className="flex flex-1 w-full justify-center items-center mt-20 mr-0 mb-0 ml-0 lg:ml-8">
            <Image src={images.findus} alt="findus"/>
        </div>
    </div>
  )
}

export default Contact