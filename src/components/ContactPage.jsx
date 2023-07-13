import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Sections/Map";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: start;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding-bottom: 100px; 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  padding-top: 50px;
  font-weight: 200;
`;

const SubTitle = styled.h3`
  font-weight: 200;
`;

const Icon = styled.img`
  width: 40px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
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
`;

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
            <Title>Contact Me</Title>
            <a href="https://www.linkedin.com/in/aapo-soukkio-a132b2244/" target="_blank" rel="noopener noreferrer">
            <Icon src="./img/linkedin.png" alt="LinkedIn" />
            </a>
            <SubTitle>Mobile phone: +358 452 334618</SubTitle>
            <SubTitle>Email: aapo.soukkio@gmail.com</SubTitle>
            <SubTitle>Or fill the form below and I will get back to you.</SubTitle>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={8} />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. We'll get back to you soon :)"}
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