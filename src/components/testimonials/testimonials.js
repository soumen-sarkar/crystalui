import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Carousel from "react-bootstrap/Carousel";
import Loading from '../share/loading'
import "./testimonials.scss"

class Testimonials extends Component {
  render() {
    const { testimonials } = this.props;

    if(testimonials){
      return (
        <div className="container-fluid testimonialsWide">
          <div className="row">
          <div className="container testimonials">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2">
                <Carousel>
                  {testimonials.map(testimonial => (
                    <Carousel.Item key={testimonial.id}>
                    <img
                      className="d-block mx-auto"
                      src={testimonial.clientImage}
                      alt="Client"
                    />
                    <Carousel.Caption>
                      <div className="w-100">
                      <h4>{testimonial.clientFirstName} {testimonial.clientLastName}</h4>
                      <small>{testimonial.clientCoName ? testimonial.clientCoName + ' - ': null}
                      {testimonial.address ? testimonial.address : null}
                      </small>
                      <p>{testimonial.comments}</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          </div>
        </div>
      )
    }else{
      return <Loading/>
    }
  }
}

Testimonials.propTypes = {
  firestore: PropTypes.object.isRequired,
  testimonials: PropTypes.array
}

export default compose(
  firestoreConnect([{collection: 'testimonials'}]),
  connect((state, props) =>({
    testimonials: state.firestore.ordered.testimonials
  }))
)(Testimonials);
