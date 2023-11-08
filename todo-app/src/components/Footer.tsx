import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (

      <div className="footer">
        <div className="name-and-icon">
          <p>Catherine</p>
          <SocialIcon
            className="contact-icon"
            url="https://github.com/CGreen789"
          />
        </div>
        <div className="name-and-icon">
          <SocialIcon
            className="contact-icon"
            url="https://github.com/anjaliruth"
          />
          <p>Anjali</p>
        </div>
      </div>
  );
}
