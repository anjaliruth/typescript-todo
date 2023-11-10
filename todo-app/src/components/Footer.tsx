
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (

      <div className="footer">
        <div className="name-and-icon">
          <p>Catherine</p>
          <SocialIcon
            className="contact-icon"
            url="https://github.com/CGreen789"
            target="_blank"
          />
        </div>
        <div className="name-and-icon">
          <SocialIcon
            className="contact-icon"
            url="https://github.com/anjaliruth"
            target="_blank"
          />
          <p>Anjali</p>
        </div>
      </div>
  );
}
