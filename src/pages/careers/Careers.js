import React, { memo } from "react";
import "./careers.css";

function Careers() {
  return (
    <section className="careers">
      <div className="container">
        <section id="careers-2__header">
          <h2>Testing Engineer</h2>
          <div class="careers-2__text">
            <span>
              <h4>Job Discription</h4>
              <p>
                Remote, India , 4 to 5 Years Of Experience Department: Website
                Design 5 Positions Available.
              </p>
            </span>
            <span>
              <h4>Salary</h4>
              <p>$30000 Per Anum</p>
            </span>
          </div>
        </section>
        <section id="careers-2__detalis">
          <div class="detalis-right">
            <a href="#">Details</a>
            <a href="#">Requirements</a>
            <a href="#">Responsibilities</a>
          </div>
          <div class="detalis-left">
            <p>
              Design & Create highly engaging industry-related content in both
              photo, gif & video format Publish Posts on various social media
              channels Promote content on social networks and monitor engagement
              (e.g. comments and shares) Research industry-related topics
              Editing audio and sound design on projects Engage in opportunities
              to develop original content and concepts for web and mobile Create
              motion graphics and animations using 2D and 3D applications for
              marketing and promotional usage.
            </p>

            <p>
              Manage the day-to-day handling of all social media channels such
              as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
              YouTube, adapting content to suit different channels
            </p>
          </div>
        </section>
        <section id="careers-2__signup">
          <div class="careers-2__bottom">
            <h3>Apply Now</h3>
            <form>
              <div class="inputs">
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="email" placeholder="Email Id"></input>
                <input type="tel" placeholder="Mobile No"></input>
              </div>
              <div class="text-area">
                <textarea
                  name="comments"
                  id="comments"
                  cols="125"
                  rows="10"
                  placeholder="Why do you thing you are good fit for Ether?"
                ></textarea>
              </div>
              <button type="submit">Sumbit</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}

export default memo(Careers);
