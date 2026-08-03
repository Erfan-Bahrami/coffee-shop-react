import React from "react";

const RedingForm = ({ reading }) => {
  return (
    <div className="   w-[272px] h-[295px] rounded-2xl  bg-white dark:bg-zinc-700 shadow-normal">
      <div className="m-2">
        <img
          className="rounded-[16px]"
          src={reading.image}
          alt={reading.name}
        />
      </div>
      <div className="flex p-[20px] gap-x-[48px]">
        <div className="text-white font-Dana text-[16px]">
          <span>{reading.name}</span>
        </div>

        <div className="flex gap-x-4">
          <span className=" block w-[2px] h-14  bg-white/10"></span>
          <div className="">
            <div className="font-DanaBold text-emerald-500 text-[24px]">
              <span>{reading.numberdate}</span>
            </div>
            <div className="font-Dana text-emerald-500 text-[14px]">
              <span>{reading.month}</span>
            </div>
            <div className="font-Dana text-emerald-500 text-[14px]">
              <span>{reading.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedingForm;
