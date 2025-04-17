import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img src="../../public/pic1.png"></img>
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
