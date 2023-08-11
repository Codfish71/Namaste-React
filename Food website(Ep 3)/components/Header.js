import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL} className="brand" />

      <div className="nav-items">
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
