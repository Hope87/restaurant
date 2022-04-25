import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";

type TPages = {
  id: number;
  name: string;
  href: string;
};

const pages: TPages[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Menu", href: "/menu" },
  { id: 4, name: "Awards", href: "/awards" },
  { id: 5, name: "Contact", href: "/contact" },
];

const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="w-full flex justify-between items-center bg-black py-4 px-8">
      <div className="flex justify-start items-center">
        <Image src={images.gericht} alt="logo" width={150} height={50} />
      </div>
      <ul className="hidden md:flex flex-1 justify-center items-center list-none">
        {pages.map((page) => (
          <li
            key={page.id}
            className="my-0 mx-4 cursor-pointer text-white hover:text-grey transition duration-500 ease-in"
          >
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center">
        <Link href="/login" passHref>
          <a className="hidden sm:flex my-0 mx-4 cursor-pointer text-white transition ease-in-out duration-500 hover:scale-110">
            Log In / Registration
          </a>
        </Link>
      </div>
      <div className="flex md:hidden">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black transition ease duration-500 flex-col z-10">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="text-2xl text-golden cursor-pointer absolute top-5 right-5"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="flex flex-col items-center mt-16">
              {pages.map((page) => (
                <li
                  key={page.id}
                  className="m-8 cursor-pointer text-golden text-3xl items-center hover:text-white transition ease duration-500 font-base"
                  onClick={() => setToggleMenu(false)}
                >
                  <Link href={page.href}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
