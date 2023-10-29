import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Sections/Map";
import CV from "../assets/CV Aapo Soukkio.pdf";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  @media only screen and (max-width: 768px) {
    scroll-snap-type: none;
    padding-bottom: 300px;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 180px;
  padding-bottom: 100px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  padding-top: 50px;
  font-weight: 200;
`;

const SubTitle = styled.h3`
  font-weight: 200;
  color: white;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  min-height: 135%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Anchor = styled.a`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`

const ContactPage = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null);

  const handleSubmit = e => {
    e.preventDefault()

    emailjs.sendForm('service_id', 'template_id', ref.current, 'public_key')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Lets work together!</Title>
            <Anchor href={CV} download>
              Download CV
            </Anchor>
            <SubTitle>Mobile phone: +358 452 334618</SubTitle>
            <SubTitle>Email: aapo.soukkio@gmail.com</SubTitle>
            <a href="https://www.linkedin.com/in/aapo-soukkio-a132b2244/" target="_blank" rel="noopener noreferrer">
            <SubTitle>Message me on LinkedIn</SubTitle>
            </a>
            <SubTitle>Or you can fill the form below and I will get back to you in no time 📬</SubTitle>
            <Input placeholder="Name" name="name" required/>
            <Input placeholder="Email" name="email" type="email" required/>
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. I will get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default ContactPage