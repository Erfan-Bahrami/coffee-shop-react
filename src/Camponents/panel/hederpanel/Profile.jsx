import React from "react";
import { FcManager } from "react-icons/fc";
const Profile = () => {
  return (
    <div
      tabIndex="1"
      className="flex focus-within:ring-2 focus-within:ring-black/20 cursor-pointer items-center gap-2 select-none p-3 hover:bg-black/5 rounded-md duration-150"
    >
      <div className="size-10">
        <FcManager className="size-full rounded-full object-cover" />
        {/* <img
          className="size-full rounded-full object-cover"
          alt="User Avatar"
        /> */}
      </div>
      <div>
        <p className="text-sm font-bold"> عرفان بهرامی</p>
        <p className="text-xs text-gray-600">مدیرعامل</p>
      </div>
    </div>
  );
};

export default Profile;
