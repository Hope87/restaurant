import { NextPage } from "next";
import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro: NextPage = () => {
  const vidRef = useRef<any>(null);
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    console.log(vidRef.current);
    

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="h-screen relative">
      <video loop controls={false} muted ref={vidRef} className="w-full h-full object-cover">
        <source src="/meal.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center items-center absolute inset-0 bg-opacity-40 bg-black">
        <div className="flex justify-center items-center w-24 h-24 border border-solid border-golden rounded-[50%] cursor-pointer" onClick={handleVideo}>
          {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
