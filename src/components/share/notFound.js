import React, { Component } from "react";
import "./notFound.scss";

class notFound extends Component {
  
  render() {
    return (
      <div className="notFoundbox">
        <div className="static">
          <div></div>
        </div>
        <div className="scan"></div>

        <div className="notFoundText">
          <svg className="overlay text" viewBox="0 0 200 130">
            <symbol id="main">
              <text
                textAnchor="middle"
                x="50%"
                y="50%"
                dy="0.20em"
                className="txt"
              >
                404
              </text>
              <text
                textAnchor="middle"
                x="50%"
                y="90%"
                dy="0em"
                className="txt2"
              >
                Not Found
              </text>
            </symbol>
            <mask
              id="msk"
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
            >
              <rect width="100%" height="100%" className="wrap"></rect>
              <use href="#main" className="mtxt"></use>
            </mask>
          </svg>
          <section>
            <div className="h1">
              <div className="fill">
                <canvas id="canv" width="460" height="360"></canvas>
              </div>
              <svg viewBox="0 0 100% 100%" className="inv">
                <rect
                  width="100%"
                  height="100%"
                  mask="url(#msk)"
                  className="rect"
                />
                <use href="#main" className="clear"></use>
              </svg>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default notFound;
