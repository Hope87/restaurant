import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react'
import { SubHeading } from '../components'
import images from "../constants/images";

const Chef: NextPage = () => {
  return (
    <div className="bg-bg-img bg-center bg-cover bg-repeat bg-fixed flex lg:flex-row flex-col justify-between items-center min-h-screen py-16 px-24">
        <div className="flex flex-1 w-full justify-start items-center mx-8">
            <Image src={images.chef} alt="chef" width={420} height={500}/>
        </div>

        <div className="flex flex-1 w-full justify-center items-start flex-col mt-12 lg:mt-0">
            <SubHeading title="Chef's word"/>
            <h1 className=" font-base text-golden lg:text-6xl text-4xl tracking-wider capitalize">What we believe in</h1>

            <div className="flex flex-col w-full mt-20">
                <div className="flex justify-start items-end">
                    <Image src={images.quote} alt="quote" width={47} height={40}/>
                    <p className="font-alt text-white font-normal tracking-wider text-base capitalize ml-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                </div>

                <p className="font-alt text-white font-normal tracking-wider text-base capitalize">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            </div>

            <div className="w-full mt-12">
                <p className="font-base font-normal text-3xl tracking-wider capitalize text-golden">Kevin Luo</p>
                <p className="font-alt text-white font-normal tracking-wider text-base capitalize mb-12">Chef & Founder</p>
                <Image src={images.sign} alt="sign" width={250} height={150}/>
            </div>
        </div>
    </div>
  )
}

export default Chef