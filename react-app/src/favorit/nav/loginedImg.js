import { useState } from "react";
import "./nav.css";
import { getUserProfileImg, getUserEmail } from "../../api.js";

export function Profile() {
  const [email, setEmail] = useState("");
  const [src, setSrc] = useState("");

  getUserEmail().then((response) => {
    setEmail(response);
  });
  getUserProfileImg().then((response) => {
    setSrc(response);
  });

  const alt = "프로필사진";

  return (
    <div className="loginedProfile">
      <img src={src} alt={alt} className="loginedProfileImg" />
      <p className="loginedEmail">{email}</p>
    </div>
  );
}
