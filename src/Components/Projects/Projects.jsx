import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      id: 2,
      project_name: "Ajio Clone",
      image: "/project_images/ajio.jpg",
      project_desc:
        "This is clone website of Ajio.com. Ajio is an ecommerse website where user can buy all kinds of Fashion products.",
      deploy_link: "https://ajio-clone-full.herokuapp.com/",
      repo_link: "https://github.com/Rajput-Vijay/Ajio-Clone-Backend",
      tech_stack: [
        <SiMongodb />,
        <FaNodeJs />,
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },
    {
      id: 4,
      project_name: "NordStrom Clone",
      image: "/project_images/nordstrom.jpg",
      project_desc:
        "Nordstrom.com clone. Nordstrom is american chain for premium range of clothes and accessories.",
      deploy_link: "https://malaya-app.netlify.app/",
      repo_link: "https://github.com/Rajput-Vijay/Nordstrom-Project",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
