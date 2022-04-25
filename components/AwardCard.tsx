
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'


type AwardCardProps = {
    imgUrl: StaticImageData;
    title: string;
    subtitle: string;
}

const AwardCard: FC<AwardCardProps> = ({imgUrl, title, subtitle}) => {
  return (
    <div className="flex flex-1 justify-start items-start sm:min-w-[230px] min-w-[100%] sm:m-4 my-4 mx-0">
        <Image src={imgUrl} alt="awards" width={50} height={50}/>
        <div className="flex flex-col ml-4">
            <p className="font-base text-golden font-bold tracking-wider capitalize text-xl">{title}</p>
            <p className="font-base text-white font-bold tracking-wider capitalize text-xl">{subtitle}</p>
        </div>
    </div>
  )
}

export default AwardCard