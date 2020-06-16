import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.scss";
import portfolioCanvas from "../../externalJs/portfolioCanvas";
import Loading from '../share/loading'

import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {currentSlideIndex: 0};
  }

  componentWillMount(){
    setTimeout(function(){ portfolioCanvas() }, 1500);
  }

  nextSlide = e => {
    e.preventDefault();    
    const { portfolio } = this.props;
     if(this.state.currentSlideIndex < portfolio.length - 1){
      this.setState({currentSlideIndex: this.state.currentSlideIndex + 1})
    }else{
      this.setState({currentSlideIndex: 0})
    }
  }

  previousSlide = e => {
    e.preventDefault();    
    const { portfolio } = this.props;
     if(this.state.currentSlideIndex > 0){
      this.setState({currentSlideIndex: this.state.currentSlideIndex - 1})
    }else{
      this.setState({currentSlideIndex: portfolio.length - 1})
    }
  }

  render() {
    const { portfolio } = this.props;

    if(portfolio){
      return (
        <div className="pieces-slider">
          {portfolio.map(folio=>(
            <div key={folio.id} className="pieces-slider__slide">
            <img
              className="pieces-slider__image"
              src={folio.thumbnailUrl}
              alt={folio.id}
            />
            <h1 className="pieces-title__text">{folio.titleText}</h1>
            <h2 className="pieces-subTitle__text">{folio.subTitleText}</h2>
          </div>
          ))}

          <canvas className="pieces-slider__canvas"></canvas>
          
          {portfolio.map((folio, i)=>(
            i === this.state.currentSlideIndex ?
              <Link className="canvas_link" to={`portfolio/${folio.id}`} key={folio.id}></Link> : null
          ))}            
          
          <button onClick={this.previousSlide} className="pieces-slider__button pieces-slider__button--prev">
            <svg width="24" height="24">
              <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
            </svg>
          </button>
          <button onClick={this.nextSlide} className="pieces-slider__button pieces-slider__button--next">
            <svg width="24" height="24">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>
      )
    }else {
      return <Loading/>
    }
  }
}

Portfolio.propTypes = {
  firestore: PropTypes.object.isRequired,
  portfolio: PropTypes.array
}

export default compose(
  firestoreConnect([{collection: 'portfolio'}]),
  connect((state, props)=>({
    portfolio: state.firestore.ordered.portfolio
  }))
)(Portfolio);
