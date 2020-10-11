import React from 'react';

import { Title, Description } from '../../components/atoms/';

const ContactInfo = () => {
  return (
    <div className="Contact-Text-Container">
      <Title content="Let's make something together" />
      <Description
        content="I’d like to create apps working togueter
                   Apps about web devekopment,
                   I’m a backend developer but also i like the frontend"
      />
      <p className="Contact-Way">
        The better way to contact me is{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/rogeliosamuel21"
        >
          Twitter{' '}
        </a>
        And you can see my projects and how i work in{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/rogeliosamuel621"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;