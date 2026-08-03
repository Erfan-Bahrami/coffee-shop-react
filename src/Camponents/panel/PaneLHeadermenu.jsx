import React from "react";
import { Link } from "react-router";
import { FcManager } from "react-icons/fc";
const PaneLHeadermenu = () => {
  return (
    <div className="p-6 border-b">
      <Link to="/panel" className="flex items-center gap-3">
        <FcManager className="size-6" />
        <span className="text-lg font-black text-zinc-900">پنل کاربری</span>
      </Link>
    </div>
  );
};

export default PaneLHeadermenu;
