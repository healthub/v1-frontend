import React from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:3026/user-profile";

function Left() {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/Fithub-logo.png",
  });

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, [image.preview_URL]);
  return (
    <div className="left">
      <div classname="image">
        <img
          onClick={() => inputRef.click()}
          className="profile"
          src="img/Fithub-logo.png"
          alt="img"
        />
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>

      <div className="leftDetails">
        <h2>Universe Code</h2>
        <button>Edit profile</button>
      </div>
    </div>
  );
}

export default Left;
