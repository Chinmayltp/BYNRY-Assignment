import React, { useState } from "react";
import UserProfile from "./Profile";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");

  //Appends UserProfile to List
  const addUser = () => {
    setUserList((prevState) => {
      return [...prevState, <UserProfile />];
    });
  };
  const handleSearch = () => {
    const searchedItem = userList.filter(
      (data) =>
        data.name && data.name.toUpperCase().includes(search.toUpperCase())
    );
    setUserList(searchedItem);
    return [...searchedItem, <UserProfile />];
  };

  return (
    <div>
      <div className='text-center flex justify-center'>
        <button onClick={addUser} className='bg-green-200 rounded-lg m-5 p-5 '>
          Add User
        </button>
        <input
          type='text'
          placeholder='search here'
          className='p-4 m3 rounded-md font-bold w-96'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className='bg-green-200 rounded-lg m-5 p-5'
          onClick={handleSearch}
        >
          search now
        </button>
      </div>

      <div className=' p-20  flex  flex-wrap bg-pink-100 rounded-lg'>
        {userList.map((user, idx) => {
          return <React.Fragment key={idx}> {user} </React.Fragment>;
        })}
      </div>
    </div>
  );
};

export default UserList;
