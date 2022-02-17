import emailjs from "emailjs-com";
import React from "react";
import {
  ContactContainer,
  ContactForm,
  InputInput1,
  InputInput2,
  A,
  Column,
  P,
  LinksCont,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  // FaHackerrank,
  FaMedium,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const footerData = [
  {
    id: 0,
    title: "Mobile",
    display: "+91-9039512378",
    link: "tel:+919039512378",
    icon: <FaPhone className="commonIconsFooter" />,
  },
  {
    id: 1,
    title: "Email",
    display: "mg08312@gmail.com",
    icon: <SiGmail className="commonIconsFooter" />,
  },
  {
    id: 2,
    title: "Github",
    display: "Github",
    link: "https://github.com/MohitGupta10",
    icon: <FaGithub className="commonIconsFooter" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    display: "LinkedIn",
    link: "https://www.linkedin.com/in/mohit-gupta-5b22a0118/",
    icon: <FaLinkedin className="commonIconsFooter" />,
  },

  {
    id: 4,
    title: "Address",
    display: "Indore, India",
    display: "Location : Indore, India",
    link: "Indore, India",
  },
];

const Contact = () => {
  function sendEmail(e){
    e.preventDefault()
     
    emailjs.sendForm('service_rajputvijay310', 'template_erwvnff', e.target, 'user_tK2b2KBsgFvQsnJeHFG6V')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log("byebye");
      });
      e.target.reset()
  }
  
  
  return (
    <Container className="contact">
      <Common>
        <H1>Contact</H1>
      </Common>
      <ContactContainer>
        <Column>
          <ContactForm onSubmit={sendEmail}>
            <InputInput1 required name="name" type="text" placeholder="Name" />
            <InputInput1
              required
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputInput2
              required
              name="message"
              placeholder="Message"
            ></InputInput2>
            <A value="Send" type="submit">SEND</A>
            </ContactForm>
            <ToastContainer />
         
        </Column>
        <Column>
          <LinksCont>
            {footerData.map((item) => (
              <div title={item.title} style={{ display: "flex" }}>
                <div>
                  {/* <a target="_blank" rel="noreferrer" href={item.link}  style={{textDecoration:"none"}}> */}
                  {item.icon}
                  {/* </a> */}
                </div>
                <div style={{ marginTop: "-5px" }}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <P>{item.display}</P>
                  </a>
                </div>
              </div>
            ))}
          </LinksCont>
        </Column>
      </ContactContainer>
    </Container>
  );
};

export default Contact;