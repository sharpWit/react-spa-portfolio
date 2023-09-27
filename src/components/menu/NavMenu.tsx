import React from "react";
import { IconContext } from "react-icons";
import { LuAlignLeft } from "react-icons/lu";

const NavMenu = () => {
  return (
    <IconContext.Provider value={{ color: "#ccf381", size: "3em" }}>
      <div>
        <LuAlignLeft />;
      </div>
    </IconContext.Provider>
  );
};

export default NavMenu;
