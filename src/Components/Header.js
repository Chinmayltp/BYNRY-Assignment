import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className='bg-green-200'>
        <li className='inline-block p-10 text-3xl cursor-pointer'>
          {" "}
          <Link to='/'>Profile</Link>
        </li>
        <li className='inline-block p-10 text-3xl cursor-pointer'>
          <Link to='/address'>Address</Link>
        </li>

        <li className='inline-block p-10 text-3xl cursor-pointer'>
          <Link to='/edit'>Edit Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
