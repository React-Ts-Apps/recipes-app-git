import React from "react";
import pic1 from "/pic1.png";
const Header = () => {
  return (
    <div className="relative h-[20vh] overflow-hidden">
      <img className="w-full" src={pic1}></img>
      <div className="max-w-[400px] absolute right-[300px] top-2 shadow-lg">
        <h2>Your food is waiting for you</h2>
        <p className="text-base text-shadow-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          necessitatibus dolorum aspernatur voluptatibus. Quam laborum
          repudiandae dolores omnis?
        </p>
      </div>
    </div>
  );
};
export default React.memo(Header);
