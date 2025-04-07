import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const SOCIAL_LINKS = [
    {
      id: 'mail',
      href: "mailto:braulinpires@hotmail.com",
      icon: IoIosMail,
      isMailTo: true
    },
    {
      id: 'linkedin',
      href: "https://www.linkedin.com/in/braulin-pires-7a13b3145/",
      icon: FaLinkedinIn
    },
    {
      id: 'instagram',
      href: "https://www.instagram.com/brawlinpiress/",
      icon: AiFillInstagram
    },
    {
      id: 'github',
      href: "https://github.com/Braulin96",
      icon: FaGithub
    }
  ];