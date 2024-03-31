import React, { memo } from "react";
import "./blog.css";
import News from "../../components/news/News";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

function Blog() {
  return (
    <section className="blog" id="blog">
      <section id="home">
        <div class="container">
          <div class="home">
            <div class="home-left">
              <div class="home-left-person">
                <img src={blog1} alt="person" />
                <p class="text home-left-person-text">Andrew Jonson</p>
                <p class="text home-left-person-list">
                  Posted on 27th January 2021
                </p>
              </div>
              <h1 class="home-title">
                Our internal process and longerm vision
              </h1>
              <p class="home-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized. We aim to attain the
              </p>
              <div class="home-left-link">
                <a href="blog-inner.html">Read More</a>
                <img src={blog2} alt="korsatgich" />
              </div>
            </div>
            <div class="home-right">
              <img src={blog3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <News display="flex" />
      <News display="none" />
    </section>
  );
}

export default memo(Blog);
