import React from "react";
import "./footer.css";
import logo from "../../assets/images/white-logo.png";
import img1 from "../../assets/images/facebook.svg";
import img2 from "../../assets/images/youtube.svg";
import img3 from "../../assets/images/instagram.svg";
import img4 from "../../assets/images/twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div class="footer__right__decoration"></div>
        <div class="footer__left__decoration"></div>
        <div class="container__1320 footer">
          <div class="footer__row">
            <div class="footer__start">
              <a href="/" className="logo">
                <img class="footer__logo" src={logo} alt="logotip" />
              </a>
              <h3>Bespoke software solutions</h3>
              <div class="footer__start__brands">
                <img src={img1} alt="footer__img" />
                <img src={img2} alt="footer__img" />
                <img src={img3} alt="footer__img" />
                <img src={img4} alt="footer__img" />
              </div>
            </div>
            <div class="footer__center">
              <ul class="footer__center__column">
                <li>
                  <h5>Company</h5>
                </li>
                <li>
                  <a href="/blogInner">About Us</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/careers2">Services</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
              <ul class="footer__center__column">
                <li>
                  <h5>Connect</h5>
                </li>
                <li>
                  <p>rustamovv.developer</p>
                </li>
                <li>
                  <p>+998 (88) 704 19 80</p>
                </li>
              </ul>
            </div>
            <div class="footer__end">
              <h5>Join Newsletter</h5>
              <form>
                <div class="email">
                  <input type="email" placeholder="Type email here" />
                </div>
                <div class="subscribe">
                  <button>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div class="footer__bottom">
            <p>© All rights reserved – Finsweet</p>
            <div class="footer__bottom__right">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
