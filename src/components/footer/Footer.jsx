import React from "react";
import "./footer.css";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom/";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="about">
            <h1 className="footer-title">About</h1>
            <div className="link">
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">Careers</Link>
            </div>
          </div>
          <div className="community">
            <h1 className="footer-title">Community</h1>
            <div className="link">
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/" className="link-item">
                Careers
              </Link>
            </div>
          </div>
          <div className="support">
            <h1 className="footer-title">Support</h1>
            <div className="link">
              <Link to="/" className="link-item">
                How Aventyr Works
              </Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">How Aventyr Works</Link>
              <Link to="/">Careers</Link>
            </div>
          </div>
          <div className="mobile">
            <h1 className="footer-title"> Mobile</h1>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            @Aventyr Africa, inc 2020 All rights reserved.
            <Link to="/">Privacy .</Link>
            <Link to="/">Terms.</Link>
          </div>
          <div className="copyright-social-icon">
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
