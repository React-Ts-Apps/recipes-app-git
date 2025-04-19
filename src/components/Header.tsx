import React from "react";
import pic1 from "/pic1.png";
const Header = () => {
  return (
    <div className="header">
      <img src={pic1}></img>
      <div className="header-text">
        <h2>Your food is waiting for you</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          necessitatibus dolorum aspernatur voluptatibus. Quam laborum
          repudiandae dolores omnis?
        </p>
      </div>
    </div>
  );
};
export default React.memo(Header);
