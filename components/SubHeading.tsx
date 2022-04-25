import React, { FC } from 'react'
import Image from 'next/image'
import  images  from "../constants/images";


type SubHeadingProps = {
    title: string
}

const SubHeading: FC<SubHeadingProps> = ({title}) => {
    
  return (
    <div className="mb-4">
        <p className="font-base text-white font-bold capitalize tracking-wider text-2xl">{title}</p>
        <Image src={images.spoon} alt="spoon" width={45}/>
    </div>
  )
}

export default SubHeading