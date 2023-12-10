import React from "react";
import styles from "../styles/Avatar.module.css";
//import ProfilePic from "../assets/avatar.jpg"

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        //src={ProfilePic}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;
