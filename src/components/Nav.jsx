import "../css/Nav.css";
import logo from "../assets/logo.svg";
import myprofile from "../assets/myprofile.svg";

export default function Nav({ items }) {
  console.log(items)
  return (
    <nav>
      <div className="navCenter">
        <div className="navBarRight"> 
          <a href="/">
            <img src={logo} alt="Linkbary logo" />
          </a>
        </div>
        <div className="navBarLeft">
          <span>
            <img src={myprofile} alt=""/>
          </span>
          <p>{items.email}</p>
        </div>
      </div>
    </nav>
  );
}
