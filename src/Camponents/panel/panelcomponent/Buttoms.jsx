import React from "react";

const Buttoms = ({ setismodalopen }) => {
  return (
    <div className=" pl-[96px] pt-8 ">
      <div className="flex items-center gap-4 justify-end ">
        <button
          onClick={() => setismodalopen(true)}
          className="w-[160px] h-12 bg-green-400 rounded-[15px]
          pb-[2px] hover:bg-green-300"
        >
          <span className="font-Dana">اضافه کردن محصول</span>
        </button>
      </div>
    </div>
  );
};

export default Buttoms;
