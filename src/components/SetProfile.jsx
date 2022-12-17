// import React from "react";
// import { useState } from "react";
// import { Button } from "@mui/material";
// import axios from "axios";
// import swal from "sweetalert";

// const SERVER_URL = "http://localhost:3026/user-profile";
// const formData = new FormData();
// const previewImg =
//   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

// function SetProfile() {
//   const [image, setImage] = useState({
//     image_file: "",
//     preview_URL: previewImg,
//     default_Img:
//       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
//   });

//   let inputRef;

//   const saveImage = (e) => {
//     e.preventDefault();
//     const fileReader = new FileReader();

//     if (e.target.files[0]) {
//       fileReader.readAsDataURL(e.target.files[0]);
//     }
//     fileReader.onload = () => {
//       setImage({
//         image_file: e.target.files[0],
//         preview_URL: fileReader.result,
//       });
//     };
//   };

//   const deleteImage = () => {
//     setImage({
//       image_file: "",
//       preview_URL: previewImg,
//     });
//   };

//   const UploadImage = async () => {
//     if (image.image_file) {
//       formData.append("file", image.image_file);
//       alert("사진이 등록되었습니다!");
//       setImage({
//         image_file: "",
//         preview_URL: previewImg,
//       });
//     } else {
//       swal("사진을 등록하세요!");
//     }
//   };

//   return (
//     <div className="uploader-wrapper">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={saveImage}
//         onClick={(e) => (e.target.value = null)}
//         ref={(refParam) => (inputRef = refParam)}
//         style={{ display: "none" }}
//       />
//       <div className="img-wrapper">
//         <img src={image.default_Img} alt="image1" />
//       </div>

//       <div className="upload-button">
//         <Button
//           type="primary"
//           variant="contained"
//           onClick={() => inputRef.click()}
//         >
//           프로필 이미지 선택
//         </Button>
//         <Button color="error" variant="contained" onClick={deleteImage}>
//           삭제하기
//         </Button>
//         <Button color="success" variant="contained" onClick={UploadImage}>
//           업로드
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default SetProfile;

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./Profile.css";

const SERVER_URL = "http://localhost:3026/user-profile";

function SetProfile() {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteImage = () => {
    // createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
  };

  useEffect(() => {
    // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, [image.preview_URL]);

  const sendImageToServer = async () => {
    if (image.image_file) {
      const formData = new FormData();
      formData.append("file", image.image_file);
      await axios.post(SERVER_URL, formData);
      alert("서버에 등록이 완료되었습니다!");
      setImage({
        image_file: "",
        preview_URL: "img/default_image.png",
      });
    } else {
      alert("사진을 등록하세요!");
    }
  };

  return (
    <div className="uploader-wrapper">
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
        onClick={(e) => (e.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img className="profile" alt="profile" src={image.preview_URL} />
      </div>

      <div className="upload-button">
        <Button
          type="primary"
          variant="contained"
          onClick={() => inputRef.click()}
        >
          사진 업로드
        </Button>
        <Button color="error" variant="contained" onClick={deleteImage}>
          삭제하기
        </Button>
        <Button color="success" variant="contained" onClick={sendImageToServer}>
          프로필 생성하기
        </Button>
      </div>
    </div>
  );
}

export default SetProfile;
