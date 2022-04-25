import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SubHeading, MenuItem } from '../components';
import data from "../constants/data";
import images from "../constants/images";

const Menu: NextPage = () => {
  return (
    <div className="flex-col bg-black flex justify-center items-center py-16 px-24">
      <div className="mb-8 text-center">
        <SubHeading title="Menu that fits your palatte"/>
        <h1 className="font-base text-golden text-6xl tracking-wider capitalize">Today&apos;s Special</h1>
      </div>

      <div className="w-full my-8 mx-0 flex flex-col lg:flex-row justify-center items-start">
        <div className="flex justify-center items-center flex-1 w-full flex-col">
          <p className="font-base font-semibold text-4xl tracking-wider text-white">Wine & Beer</p>
          <div className="flex flex-col w-full my-8 mx-0">
            {data.wines.map((wine, index) => (
             <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-[410px] lg:my-0 lg:mx-8 my-12 mx-0">
          <Image src={images.menu} alt="menu" layout="responsive"/>
        </div>

        <div className="flex justify-center items-center flex-1 w-full flex-col">
          <p className="font-base font-semibold text-4xl tracking-wider text-white">Cocktails</p>
          <div className="flex flex-col w-full my-8 mx-0">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link href="/chef" passHref><a className="bg-crimson text-black font-base font-bold tracking-wider text-base py-2 px-6 rounded-sm border-0 outline-0 cursor-pointer">Our Chef</a></Link>
    </div>
    </div>
  );
};

export default Menu;
