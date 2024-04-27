import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    fetch("https://randomuser.me/api")
      .then((resp) => resp.json())
      .then((data) => setUserData(data.results));
  };

  //Creates userProfile with picture/full name
  const userProfile = (userMeta) => {
    const {
      name: { first, last },
      picture: { medium },

      location: {
        street: { number, name },
        city,
        state,
        country,
        coordinates: { latitude, longitude },
      },
    } = userMeta;

    return (
      <div className='rounded-lg'>
        <div className='flex'>
          <img src={medium} alt='' className='p-4 m-5  bg-white rounded-lg ' />

          <button className='bg-gray-200 cursor-pointer rounded-lg'>
            <Link to='/edit'> Edit Profile</Link>
          </button>
        </div>
        <p className='p-4 m-5  rounded-lg bg-gray-100'>
          {first} {last}
        </p>

        <p className='p-4 m-5  rounded-lg bg-gray-100'>
          <Link to='/address'>
            {number},{name},{city}, {state} ,{country} <br></br>
            {latitude},{longitude}
          </Link>
        </p>
      </div>
    );
  };

  //Fetch API data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className='bg-gray-100'>
      {userData.map((userMeta, idx) => {
        return <div key={idx}>{userProfile(userMeta)}</div>;
      })}
    </div>
  );
};

export default Profile;
