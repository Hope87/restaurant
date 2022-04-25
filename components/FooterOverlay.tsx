import React, { FC } from 'react'

const FooterOverlay: FC = () => {
  return (
    <div className="w-full h-full z-[-1] flex flex-col absolute inset-0">
        <div className="h-[25%] bg-black"/>
        <div className="h-[75%] bg-bg-img bg-center bg-cover bg-repeat bg-fixed"/>
    </div>
  )
}

export default FooterOverlay