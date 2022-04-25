import React, { FC } from "react";

type MenuItemProps = {
  title: string;
  price: string;
  tags: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, price, tags }) => {
  return (
    <div className="w-full my-4 mx-0 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="font-base text-golden font-bold tracking-wider capitalize text-2xl">{title}</p>
        </div>

        <div className="w-24 h-px bg-golden my-0 mx-4"/>

        <div className="flex justify-end items-end">
          <p className="font-alt text-white font-normal tracking-wider capitalize text-base">{price}</p>
        </div>
      </div>

      <div className="w-full mt-1">
          <p className="font-base text-grey font-bold tracking-">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
