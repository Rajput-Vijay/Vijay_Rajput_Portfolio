import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/vijay-rajput-8305687489/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/Rajput-Vijay",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/rajput_vijay10",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>
        <Column>
          <Img src="/images/Vijaybg.webp" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
            I am a dedicated Full Stack Web programmer with a broad expertise set that allows me to create robust web applications.
 I am proficient in both front-end and back-end, and I have an eye for efficiency and precision.
            </AboutInfoP>
            <AboutInfoP>
            I am flexible, skilled in remote collaboration, and dedicated to achieving organizational objectives.
 I am passionate about solving Algorithmic problems with a strong grasp on Data Structures with a knack for problem-solving and analytics.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
