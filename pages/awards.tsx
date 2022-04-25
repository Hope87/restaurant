import { NextPage } from "next";
import Image from 'next/image'
import { SubHeading, AwardCard } from "../components";
import data from "../constants/data";
import images from "../constants/images";

const Awards: NextPage = () => {
  return (
    <div className="bg-bg-img bg-center bg-cover bg-repeat bg-fixed flex justify-between items-center min-h-screen flex-col lg:flex-row py-16 px-24">
      <div className="flex flex-1 w-full justify-center items-start flex-col">
        <SubHeading title="Awards & recognition" />
        <h1 className="font-base text-golden text-6xl tracking-wider capitalize">
          Our Laurels
        </h1>

        <div className="flex justify-start items-center mt-12 flex-wrap">
          {data.awards.map((award) => (
            <AwardCard
              imgUrl={award.imgUrl}
              title={award.title}
              subtitle={award.subtitle}
              key={award.title}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 w-full justify-center items-center ml-8">
          <Image src={images.laurels} alt="laurels"/>
      </div>
    </div>
  );
};

export default Awards;
