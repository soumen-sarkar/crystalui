import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

class header extends Component {
  componentDidMount() {}

  onlink() {
    const menu = document.querySelector(".checkbox-toggle");
    menu.checked = !menu.checked;
  }

  render() {
    return (
      <div className="container-fluid headerWide">
        <div className="row">
          <div className="col-9">
            <h1>
              <Link to="/">CRYSTAL UI</Link>
            </h1>
          </div>
          <div className="col-3">
            <div className="outer-menu">
              <input className="checkbox-toggle" type="checkbox" />
              <div className="menu-icon">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
              </div>
              <div className="menu">
                <div className="nav">
                  <div className="nav__content">
                    <ul className="nav__list">
                      <li className="nav__list-item">
                        <Link to="/" onClick={this.onlink}>
                          Home
                        </Link>
                      </li>
                      <li className="nav__list-item">
                        <Link to="/about" onClick={this.onlink}>
                          About me
                        </Link>
                      </li>
                      <li className="nav__list-item">
                        <Link to="/portfolio" onClick={this.onlink}>
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav__list-item">
                        <Link to="/testimonials" onClick={this.onlink}>
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
