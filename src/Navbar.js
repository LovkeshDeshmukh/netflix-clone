import React, { useEffect, useState } from "react";
import "./Navbar.css"

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  const scrollhandler = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollhandler);
    return () => window.removeEventListener("scroll", scrollhandler);
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="netflix_img"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          className="avatar_img"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Navbar;
