import React, { useRef } from 'react'
import { NextPage } from "next";
import Image from 'next/image'
import { SubHeading } from "../components";
import images from "../constants/images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery: NextPage = () => {
    const scrollRef = useRef<null>(null)

    

    const scroll = (direction: string) => {
        const {current} = scrollRef;

    console.log(scrollRef);


        if(direction === "left"){
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }
  
    return (
    <div className="flex justify-center items-center bg-black md:pt-16 md:pr-0 md:pb-16 md:pl-24 flex-col lg:flex-row pt-16 pr-0 pb-16 pl-8 sm:pl-16">
        <div className="flex flex-1 justify-center items-start flex-col sm:min-w-[500px] pr-8 min-w-[100%]">
            <SubHeading title="Instagram"/>
            <h1 className=" font-base text-golden text-6xl tracking-wider capitalize">Photo Gallery</h1>
            <p className="font-alt text-white font-normal tracking-wider text-base capitalize mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button type="button" className="bg-crimson text-black font-base font-bold tracking-wider text-base py-2 px-6 rounded-sm border-0 outline-0 cursor-pointer mt-8">View More</button>
        </div>

        <div className="flex flex-1 lg:max-w-[50%] relative flex-row max-w-full my-20 mx-0 lg:my-0">
            <div ref={scrollRef} className="flex flex-row w-max overflow-scroll">
               {galleryImages.map((image, index) => (
                   <div className="flex justify-center items-center relative sm:min-w-[301px] sm:h-[447px] mr-8 hover:opacity-[35%] min-w-[240px] h-[320px]" key={`gallery_image-${index + 1}`}>
                    <Image src={image} alt="gallery"/>
                    <BsInstagram className="absolute text-white tex text-3xl opacity-70 transition duration-500 ease-out cursor-pointer"/>
                   </div>
               ))}
            </div>
            <div className="w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
                <BsArrowLeftShort className="text-golden text-3xl bg-black cursor-pointer rounded-md hover:text-white" onClick={() => scroll('left')}/>
                <BsArrowRightShort className="text-golden text-3xl bg-black cursor-pointer rounded-md hover:text-white" onClick={() => scroll('right')}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery