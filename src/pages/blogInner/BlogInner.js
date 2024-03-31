import React, { memo } from "react";
import "./blogInner.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";

function BlogInner() {
  return (
    <section className="blogInner">
      <div className="container">
        <section id="blog-inner__header">
          <div class="container__1320">
            <img class="header-img" src={img1} alt="abc" />
          </div>
          <span class="blog-inner__profile container__792">
            <img src={img2} alt="abc" />
            <p>Andrew Jonson</p>
            <p>Posted on 27th January 2021</p>
          </span>
        </section>
        <section id="blog-inner__text">
          <div class="container__792">
            <section id="blog-inner__text-1">
              <h2>
                Breaking the code How <br />
                did we build our Figma <br />
                plugin
              </h2>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice and tone for error messages.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice.
              </p>
            </section>
            <section id="blog-inner__text-2">
              <h3>
                Transform Your Idea Into Reality <br />
                with Ether a Leading Digital Agency
              </h3>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and
                sometimes we are unsure about how to get the right word. To
                crack the code for the UX copies, we at Zeta Design wanted to
                build a Figma plugin for the larger design community. The plugin
                is called the Ghost UXWriter and has a set of UX copies
                cataloged and categorized with a voice and tone variation
                ranging from plain, casual to playful. The intention to build
                this Figma plugin originated from our Medium blog post,
                ‘Designing voice.
              </p>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

export default memo(BlogInner);
