import React, { Component, useRef } from "react";
import "./portfolioDetails.scss";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { Link } from "react-router-dom";
import { useDrag } from "react-use-gesture";
import Loading from "../share/loading";

import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class PortfolioDetails extends Component {
  render() {
    const { project } = this.props;

    if (project) {
      // const baseUrl = window.location.origin.toString() + "/";
      const baseUrl = "../";
      const pages = project.images.map(img => {
        return baseUrl + img;
      });

      function Viewpager() {
        const index = useRef(0);
        const [props, set] = useSprings(pages.length, i => ({
          x: i * window.innerWidth,
          scale: 1,
          display: "block"
        }));
        const bind = useDrag(
          ({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
            if (down && distance > window.innerWidth / 2)
              cancel(
                (index.current = clamp(
                  index.current + (xDir > 0 ? -1 : 1),
                  0,
                  pages.length - 1
                ))
              );
            set(i => {
              if (i < index.current - 1 || i > index.current + 1)
                return { display: "none" };
              const x =
                (i - index.current) * window.innerWidth + (down ? mx : 0);
              const scale = down ? 1 - distance / window.innerWidth / 2 : 1;
              return { x, scale, display: "block" };
            });
          }
        );
        return props.map(({ x, display, scale }, i) => (
          <animated.div {...bind()} key={i} style={{ display, x }}>
            <animated.div
              style={{ scale, backgroundImage: `url(${pages[i]})` }}
            />
          </animated.div>
        ));
      }

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 portfolioGalleryContainer">
              <div className="portfolioDetails">
                <Viewpager />
              </div>
            </div>
          </div>
          <div className="container portfolioDetailsContainer">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="text-center">
                  {project.titleText} - {project.subTitleText}
                </h3>
                <ul>
                  <li>Features :</li>
                  {project.features.map((feature, i, arr) => {
                    return (
                      <li key={i}>
                        {" "}
                        {arr.length - 1 === i ? feature : feature + ","}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  <li>Credits :</li>
                  {project.credits.map((credit, i, arr) => {
                    return (
                      <li key={i}>
                        {" "}
                        {arr.length - 1 === i ? credit : credit + ","}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-center">
                  <strong>My Role :</strong> {project.myRole}
                </p>
                <div className="text-center">
                  <Link
                    to={"/portfolio"}
                    className="btn btn-sm btn-primary text-center mr-2"
                  >
                    <svg width="24" height="24">
                      <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                    </svg>
                    <span>Back</span>
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary text-center ml-2"
                  >
                    <span>Live</span>
                    <svg width="24" height="24">
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

PortfolioDetails.propTypes = {
  firestore: PropTypes.object.isRequired,
  project: PropTypes.object
};

export default compose(
  firestoreConnect(props => [
    {
      collection: "portfolio",
      storeAs: "project",
      doc: props.match.params.id
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    project: ordered.project && ordered.project[0]
  }))
)(PortfolioDetails);
