import React from "react";

interface SocialLinkT {
  href : string;
  iconSrc : string;
  altText : string;
}
const SocialLink = ({ href, iconSrc, altText }:SocialLinkT) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={iconSrc} alt={altText} />
  </a>
);

export default SocialLink;
