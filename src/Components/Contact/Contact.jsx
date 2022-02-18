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
import emailjs from "emailjs-com";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaLocationArrow,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const footerData = [
  {
    id: 0,
    title: "Mobile",
    display: "+91-8305687489",
    link: "tel:+918305687489",
    icon: <FaPhone className="commonIconsFooter" />,
  },
  {
    id: 1,
    title: "Email",
    display: "rajputvijay310@gmail.com",
    link: "mailto:rajputvijay310@gmail.com",
    icon: <SiGmail className="commonIconsFooter" />,
  },
  {
    id: 2,
    title: "Github",
    display: "Github",
    link: "https://github.com/Rajput-Vijay",
    icon: <FaGithub className="commonIconsFooter" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    display: "LinkedIn",
    link: "https://www.linkedin.com/in/vijay-rajput-8305687489/",
    icon: <FaLinkedin className="commonIconsFooter" />,
  },
  {
    id: 4,
    title: "Twitter",
    display: "Twitter",
    link: "https://twitter.com/rajput_vijay10",
    icon: <FaTwitter className="commonIconsFooter" />,
  },
  {
    id: 5,
    title: "Medium",
    display: "Medium",
    link: "	https://medium.com/@rajput_vijay10",
    icon: <FaMedium className="commonIconsFooter" />,
  },
  {
    id: 6,
    title: "Location",
    display: "Indore, India",
    link: "https://www.google.com/maps/place/Indore,+Madhya+Pradesh/@22.7239575,75.7938095,12z/data=!3m1!4b1!4m5!3m4!1s0x3962fcad1b410ddb:0x96ec4da356240f4!8m2!3d22.7195687!4d75.8577258",
    icon: <FaLocationArrow className="commonIconsFooter" />,
  },
  
];

const Contact = () => {
  const success = () => toast.dark("Successfully Sent");
  const failure = () => toast.error("Something went wrong");
  
  const sendEmail = (e) => {  
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rajputvijay310',
        'template_erwvnff',
        e.target,
        'user_tK2b2KBsgFvQsnJeHFG6V'
      )
      .then(
        (result) => {
          console.log(result.text);
          success();
        },
        (error) => {
          console.log(error.text);
          failure();
        }
      );
    e.target.reset();
  };
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
            <A value="Send">SEND</A>
            <ToastContainer />
          </ContactForm>
        </Column>
        <Column>
          <LinksCont>
            {footerData.map((item) => (
              <div title={item.title} style={{ display: "flex" }}>
                <div>
                  {item.icon}
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