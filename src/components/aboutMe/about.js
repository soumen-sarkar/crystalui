import React, { Component } from "react";
import "./about.scss";
import aboutScript from "../../externalJs/aboutScript";

class about extends Component {
  componentDidMount() {
    aboutScript();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 about-grid">
            <div className="content">
              <div className="page-nav">
                <h3>The Story</h3>
                <h6>
                  I’m Soumen Sarkar, a UI designer/developer who focuses on telling stories
                  visually, through enjoyable and meaningful experiences.
                </h6>
                <p>
                  I specialize in responsive websites and functional user
                  interfaces. Over the past 9 years I've been working with big
                  companies, As a part of projects with very challenging
                  business logic I always strives towards the most optimal and
                  generic solutions that fulfill the strictest quality
                  requirements. I’ve been lucky enough to establish
                  relationships with amazing clients from all over the world. In
                  my spare time I enjoy photography, and love to play with my pet GOGO.
                </p>
                <p>
                  <small>
                    For more details, head over to my
                    <a
                      href="https://www.linkedin.com/in/soumen-sarkar-66ba6735/"
                      target="_blank" rel="noopener noreferrer"
                    >
                      {" "}
                      LinkedIn profile{" "}
                    </a>
                  </small>
                </p>
                <button className="btn btn-sm btn-primary text-center page-nav__item page-nav__item--close">
                  <svg width="24" height="24">
                    <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                  </svg>
                  Back
                </button>
              </div>
              <div
                className="pieces"
                style={{ backgroundImage: `url(${require("./me.png")})` }}
              ></div>
              <p className="content__title display-1">
                Explore
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
