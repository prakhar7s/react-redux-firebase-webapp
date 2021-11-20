import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router";
import { compose } from "redux";
import Apartment from "../apartment/apartment";
import Loader from "../loader/Loader";

import "./apartments.css";
import { redirect } from "../../store/actions/actions";

class Aapartments extends Component {
  render() {
    const { apartments } = this.props;
    if (this.props.redirectTo) {
      return <Redirect to={this.props.redirectTo} />;
    }

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
    apartments: state.firestore.ordered.catlogue,
    redirectTo: state.apartment.redirectTo,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    redirect: (apartmentId) => dispatch(redirect(apartmentId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  firestoreConnect([
    {
      collection: "city",
      doc: "SSX77pJNAU5wvOIwECnW",
      storeAs: "catlogue",

      subcollections: [
        {
          collection: "locality",
          doc: "yqnMZNXH2IRG8TVxw694",
          subcollections: [
            {
              collection: "catalogue",
            },
          ],
        },
      ],
    },
  ])
)(Aapartments);
