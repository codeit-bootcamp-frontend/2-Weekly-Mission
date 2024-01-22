import React from 'react';

interface LinkType {
  href: string;
  text: string;
}

const Link = ({ href, text }: LinkType) => (
  <a className="footer-link" href={href}>
    {text}
  </a>
);

export default Link;
