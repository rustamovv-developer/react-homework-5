import React, { memo } from "react";
import "./home.css";
import homeImg from "../../assets/images/home.png";
import HomePosition from "../../components/home-position/HomePosition";
import News from "../../components/news/News";

function Home() {
  return (
    <>
      <header className="header">
        <div class="container">
          <div class="header__info">
            <div class="header__left">
              <h2 class="header__title">
                We hired people who are very passionate about what they do
              </h2>
              <p class="header__text">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw.
              </p>
              <a href="#" class="header__btn">
                Work With Us
              </a>
            </div>
            <div class="header__right">
              <img src={homeImg} alt="about__header" class="header__img" />
              <div class="header__bottom"></div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <HomePosition />
        <News />
      </main>
    </>
  );
}

export default memo(Home);
