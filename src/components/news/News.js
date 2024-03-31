import React, { memo } from "react";
import { NEWS } from "../../static";
import "./news.css";
import arrowImg from "../../assets/images/arrow-right.svg";

function News({ display }) {
  return (
    <section className="news" id="latest">
      <div className="container support">
        <h2 style={{ display: display }} class="support__title">
          Latest Blog & News
        </h2>
        <div className="support__row">
          {NEWS?.map((el) => (
            <div class="support__row__card">
              <img src={el.img} alt="home-support1" />
              <div class="support__row__card__content">
                <h5>{el.title}</h5>
                <p>{el.text}</p>
                <div class="support__row__card__bottom">
                  <a href="#">{el.btn}</a>
                  <img src={arrowImg} alt="arrow-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(News);
