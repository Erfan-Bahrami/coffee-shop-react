import React from "react";

//  mt-[80px]
// mt-[15px]

function Caption() {
  return (
    <div className="pt-[240px]">
      <div className=" flex items-center pb-[24px] w-[462px] h-[62px] mr-[1104px] font-MorabbaBold text-white text-[40px]">
        <span>قهوه عربیکا تانزانیا</span>
      </div>
      <div className="flex items-center pb-[32px] w-[305px] h-[64px] mr-[1105px] text-[35px] text-white font-MorabbaLight ">
        <span>یک فنجان بالانس!</span>
      </div>

      <span className=" block w-[100px] h-[2px] mr-[1107px] mb-[20px]  bg-orange-300"></span>

      <div className="text-white font-Dana text-[17px] w-[460px] h-[96px] mr-[1104px] leading-[27px] ">
        <span>
          قطعا نام آشنای عریبیکا را شنیده اید. عربیکا یکی از <br /> گونه های
          قهوه است که در نواحی مختلف کمربند
          <br /> قهوه کشت میشود.
        </span>
      </div>
    </div>
  );
}

export default Caption;
