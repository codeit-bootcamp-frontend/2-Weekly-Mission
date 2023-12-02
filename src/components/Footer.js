import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer>
      <span>@codeit - 2023</span>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div>
        <SocialLink>facebook</SocialLink>
        <SocialLink>twitter</SocialLink>
        <SocialLink>youtube</SocialLink>
        <SocialLink>instagram</SocialLink>
      </div>
    </footer>
  );
}

export default Footer;
