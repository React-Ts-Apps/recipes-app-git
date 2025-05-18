import React from "react";
import pic1 from "/pic1.png";
const Header = () => {
  return (
    <div className="relative h-[20vh] overflow-hidden">
      <img className="w-full h-full object-cover" src={pic1}></img>

      <div className="max-w-[500px] justify-center bg-amber-100/60 font-stretch-80% text-lg left-[400px] font-extrabold absolute p-5 top-10 shadow-amber-600">
        <h2>Your next favorite meal is just a click away</h2>
        <p className=" text-red-700 pl-30 text-base">
          Cook it -- Love it -- Share it --
        </p>
      </div>
    </div>
  );
};
export default React.memo(Header);
