import { useState } from "react";
import img from "../assets/img.jpg";

function Profile() {

  const imgStyle = {
    width: "200px",
    height: "200px",
  };
  const btnStyle = {
    backgroundColor: "blue",
  };
  const [displayBio, setDisplayBio] = useState(false);
  const toggle = () => {
    setDisplayBio(!displayBio);
  };

  return (
    <div>
      <img style={imgStyle} src={img} alt="profile" />
      <h1>Antoor</h1>
      <p>Front-end Developer</p>
      {displayBio ? (
        <div>
          <p>This is my bio</p>
          <p>Do you like it</p>
          <button style={btnStyle} onClick={toggle}>
            Show Less
          </button>
        </div>
      ) : (
        <div>
          <button style={btnStyle} onClick={toggle}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
