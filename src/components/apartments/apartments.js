import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Apartment from "../apartment/apartment";
import Loader from "../loader/Loader";

import "./apartments.css";

class Aapartments extends Component {
  render() {
    const { apartments } = this.props;

    return (
      <div className="dashboard container">
        <div className="apartment-cards">
          {apartments ? (
            apartments.map((apartment) => (
              <Apartment key={apartment.id} {...apartment} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apartments: state.firestore.ordered.apartments,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "apartments" }])
)(Aapartments);
