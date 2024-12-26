import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__socials">
          <Link to="https://www.instagram.com/ravanrahimli/">
            <i className="ri-instagram-line"></i>
          </Link>
          <Link to="https://www.facebook.com/">
            <i className="ri-facebook-circle-fill"></i>
          </Link>
          <Link to="https://www.linkedin.com/">
            <i className="ri-linkedin-box-fill"></i>
          </Link>
          <Link to="https://github.com/ravanrahimli">
            <i className="ri-github-fill"></i>
          </Link>
        </div>
        <p>
          Designed & Built by
          <span>Revan Rehimli</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
