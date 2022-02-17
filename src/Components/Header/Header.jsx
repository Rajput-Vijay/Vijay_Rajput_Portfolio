import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";
import "./typing.css";

const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <br />
          <H1>Hi 👋 I'm </H1>
          <span>
            <h2 data-text="Vijay Rajput">Vijay Rajput</h2>
          </span>
          <br />
          <P>
          A passionate Full Stack Web Developer with a diverse range of technical and non-technical skills and a passion for building useful and engaging web applications.
          </P>
          <HeaderButtons>
            <A
              target="_blank"
              rel="noreferrer"
              href="/resume/vijayrajput.pdf"
            >
              Resume
            </A>
            &nbsp;&nbsp;&nbsp;
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
            >
              <A>Projects</A>
            </Link>
          </HeaderButtons>
        </div>
        <br />
      </HeaderContent>
    </Container>
  );
};

export default Banner;
