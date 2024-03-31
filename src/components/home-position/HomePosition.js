import React, { memo } from "react";
import { homePosition } from "../../static";
import "./homePosition.css";

function HomePosition() {
  return (
    <section className="position">
      <div className="container">
        <h2 className="pos__title">See our open positions </h2>
        <div className="position__box">
          {homePosition?.map((el, i) => (
            <div key={i} className="position__card">
              <h2 className="position__title" key={i}>
                {el}
              </h2>
              <p key={i} className="position__text">
                Bengaluru · Full Time
              </p>
              <button key={i} className="position__btn">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(HomePosition);
