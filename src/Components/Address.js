import React from "react";

const Address = (props) => {
  const handleClick = () => {
    const encodedCoords = `${encodeURIComponent(
      props.latitude
    )},${encodeURIComponent(props.longitude)}`;
    let url = `https://www.google.com/maps/@${encodedCoords}`;
    window.open(url, "/address");
  };

  return (
    <div>
      <button onClick={handleClick}>Show on Google Maps</button>
    </div>
  );
};

export default Address;
