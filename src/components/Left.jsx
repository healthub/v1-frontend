// import React from "react";
// import { MdInsertEmoticon } from "react-icons/md";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const SERVER_URL = "http://localhost:3026/user-profile";
// const formData = new FormData();

// function Left() {
//   const [image, setImage] = useState({
//     image_file: "",
//     preview_URL: "img/Fithub-logo.png",
//   });

//   const [username, setUsername] = useState({
//     User: "",
//     preview_Username: "username",
//   });
//   const [bio, setBio] = useState({
//     Bio: "",
//     preview_Bio: "bio",
//   });
//   const [mainclub, setMainclub] = useState({
//     Mainclub: "ss",
//     preview_Mainclub: "mainclub2",
//   });
//   const [instagram, setInstagram] = useState({
//     Instagram: "",
//     preview_Instagram: "instagram",
//   });
//   const [isEditable, setIsEditable] = useState(false);

//   let inputRef;

//   const handleDoubleClick = () => {
//     setIsEditable(true);
//   };

//   const handleChange_1 = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleChange_2 = (e) => {
//     setBio(e.target.value);
//   };

//   const handleChange_3 = (e) => {
//     setMainclub(e.target.value);
//   };

//   const handleChange_4 = (e) => {
//     setInstagram(e.target.value);
//   };

//   const saveImage = (e) => {
//     e.preventDefault();
//     if (e.target.files[0]) {
//       URL.revokeObjectURL(image.preview_URL);
//       const preview_URL = URL.createObjectURL(e.target.files[0]);
//       setImage(() => ({
//         image_file: e.target.files[0],
//         preview_URL: preview_URL,
//       }));
//     }
//   };

//   useEffect(() => {
//     return () => {
//       URL.revokeObjectURL(image.preview_URL);
//     };
//   }, [image.preview_URL]);

//   const handleEdit = () => {
//     if (
//       (image.image_file,
//       username.User,
//       bio.Bio,
//       mainclub.Mainclub,
//       instagram.Instagram)
//     ) {
//       formData.append("profileImageUrl", image.image_file);
//       formData.append("userName", username.User);
//       formData.append("bio", bio.Bio);
//       formData.append("mainClub", mainclub.Mainclub);
//       formData.append("instaAccount", instagram.Instagram);
//       console.log(formData());
//       axios.post(SERVER_URL, formData);
//       alert("프로필 수정이 완료되었습니다.");
//       setImage({
//         image_file: "",
//         preview_URL: "img/Fithub-logo.png",
//       });

//       // axios.post(SERVER_);
//     }
//   };

//   return (
//     <div className="left">
//       <div classname="image">
//         <img
//           onClick={() => inputRef.click()}
//           className="profile"
//           src="img/Fithub-logo.png"
//           alt="img"
//         />
//         <div className="emoticonBox">
//           <MdInsertEmoticon className="emoticon" />
//         </div>
//       </div>

//       <div className="leftDetails">
//         {isEditable ? (
//           <input
//             type="username"
//             value={username.User}
//             onChange={handleChange_1}
//           />
//         ) : (
//           <p onDoubleClick={handleDoubleClick}>{username.preview_Username}</p>
//         )}
//         {isEditable ? (
//           <input type="bio" value={bio.bio1} onChange={handleChange_2} />
//         ) : (
//           <p onDoubleClick={handleDoubleClick}>{bio.preview_Bio}</p>
//         )}
//         {isEditable ? (
//           <input
//             type="mainclub"
//             value={mainclub.mainclub1}
//             onChange={handleChange_3}
//           />
//         ) : (
//           <p onDoubleClick={handleDoubleClick}>{mainclub.preview_Mainclub}</p>
//         )}
//         {isEditable ? (
//           <input
//             type="instagram"
//             value={instagram.instagram1}
//             onChange={handleChange_4}
//           />
//         ) : (
//           <p onDoubleClick={handleDoubleClick}>{instagram.preview_Instagram}</p>
//         )}

//         <button onClick={handleEdit}>Edit profile</button>
//       </div>
//     </div>
//   );
// }

// export default Left;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function Left() {
  const formData = new FormData();
  const SERVER_URL = "http://localhost:3026/user-profile";

  const [username, setUsername] = useState("유저 닉네임을 입력해주세요.");
  const [bio, setBio] = useState("소개");
  const [mainclub, setMainclub] = useState("");
  const [insta, setInsta] = useState("");

  const [profile, setProfile] = useState({
    username: "Username",
    bio: "Bio",
    mainclub: "Mainclub",
    instaAccount: "Instagram",
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditable(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.append("userName", profile.username);
    formData.append("bio", profile.username);
    formData.append("mainclub", profile.username);
    formData.append("instaAccount", profile.username);
    console.log(formData);
    if (formData === "") {
      swal("정보를 입력해주세요.");
    } else axios.post(SERVER_URL, {});
  };

  return (
    <div className="left">
      {/* <div className="image">
        <img
          onClick={() => inputRef.click()}
          className="profile"
          src="img/Fithub-logo.png"
          alt="img"
        />
      </div> */}
      <div className="leftDetails">
        <form className="profileForm" onSubmit={onSubmit}>
          <div className="profileContainer"></div>
          {isEditable ? (
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <p onDoubleClick={handleDoubleClick}>username: {username}</p>
          )}
          {isEditable ? (
            <input
              type="text"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <p onDoubleClick={handleDoubleClick}>bio: {bio}</p>
          )}
          <p
            value={profile.mainclub}
            onChange={(e) => {
              setProfile.mainclub(e.target.value);
            }}
          >
            mainclub: {profile.mainclub}
          </p>
          <p
            value={profile.instaAccount}
            onChange={(e) => {
              setProfile.instaAccount(e.target.value);
            }}
          >
            instagram: {profile.instaAccount}
          </p>
          <Link to="/edit/:{id}">
            <button>프로필 수정하기</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Left;
