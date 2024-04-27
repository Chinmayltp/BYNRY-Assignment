import React, { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const editProfile = () => {
    console.log(name, img, address);
  };
  return (
    <div className='justify-items-center ml-40'>
      <input
        type='text'
        placeholder='Edit name'
        className='w-96 rounded-lg border block p-6 m-5 ml-40 '
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type='text'
        placeholder='Enter image link'
        className='w-96 rounded-lg border block p-6 m-5 ml-40 '
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />

      <input
        type='text'
        placeholder='Edit Address'
        className='w-96 rounded-lg border block p-6 m-5 ml-40 '
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        className='rounded-lg bg-green-200 w-60 block p-6 m-5 ml-40 '
        onClick={editProfile}
      >
        Update Product
      </button>
    </div>
  );
};

export default EditProfile;
