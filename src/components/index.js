import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div className="splashWide">
        <div className="container splash">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="logo">Crystal UI</h1>
              <ul className="cta">
                <li>
                  <Link to="/about">About me</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
