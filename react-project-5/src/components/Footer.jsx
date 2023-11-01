import React from "react";
import me from "../assets/mee.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Shoaib Siddiqui</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/shoaib031/shoaib031-Front-End" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;