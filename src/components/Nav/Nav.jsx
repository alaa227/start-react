import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-cyan-950 text-white  py-9">
      <ul className="flex justify-around align-top">
        <li>
          <Link className=" text-4xl" to="">
            START FRAMEWORK
          </Link>
        </li>
        <li className=" pt-3">
          <NavLink to="about">ABOUT</NavLink>
        </li>
        <li className=" pt-3">
          <NavLink to="port">PORTFOLIO</NavLink>
        </li>
        <li className=" pt-3" >
          <NavLink to="gal">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
}
