import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../helpers';

import Header from '../../components/Header';
import Button from '../../components/Button';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ContactContent = styled.div`
  max-width: 700px;
  text-align: center;
`;

function Contact() {
  const query = `
    {
      blurbCollection(where: {title_in: "Contact Blurb"}) {
        items {
          title
          content
        }
      }
    }
  `;

  const [contactBlurb, setContactBlurb] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'blurbCollection', setContactBlurb);
  }, []);

  return (
    <ContactContainer id="contact" className="container">
      <ContactContent>
        <Header centered title={'Buzzing With Ideas?'} subtitle={'contact'} />
        <ReactMarkdown children={!contactBlurb ? null : contactBlurb.content} />
        <Button
          value="say hello"
          title="Bryan Brotonel | Email"
          href="mailto:mrbryanbrotonel@gmail.com"
          target={true}
        ></Button>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
