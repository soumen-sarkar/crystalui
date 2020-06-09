import React, { Component } from "react";

class footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="container-fluid footerWide">
        <div className="row">
          <div className="col-7">
            <p className="pt-2 mb-0">&copy; {currentYear} crystalui.in</p>
          </div>
          <div className="col-5">
            <ul className="mb-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/soumen-sarkar-66ba6735/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/soumen-sarkar" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
