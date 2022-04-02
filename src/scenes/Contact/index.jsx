import React from 'react';

import styled from 'styled-components';

import Header from 'Components/Header';
import Button from 'Components/Button';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 12rem 0;
`;

const ContactContent = styled.div`
  max-width: 700px;
  text-align: center;
`

function Contact() {
  return (
    <ContactContainer className="container">
      <ContactContent>
        <Header centered title={'Buzzing With Ideas?'} subtitle={'contact'} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
          aliquid corrupti molestiae blanditiis, quasi veniam, repudiandae qui
          ipsam impedit voluptatibus doloribus, eius aliquam dignissimos
          doloremque sapiente id ad in.
        </p>
        <Button
          value="say hello"
          title="Bryan Brotonel | Email"
          href="mailto:mrbryanbrotonel@gmail.com"
        ></Button>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
