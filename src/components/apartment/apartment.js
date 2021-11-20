import "./apartment.css";

import { redirect } from "../../store/actions/actions";
import { connect } from "react-redux";

import React from "react";
import Moment from "react-moment";

const Apartment = (props) => {
  const { images, address, id, idealFor, bathroom, bedroom, postedOn } = props;

  // console.log(postedOn.toISOString());
  const formattedDate = Date(
    postedOn.toString().substring(0, 27).replace("at", "")
  );

  return (
    <div
      onClick={() => {
        props.redirect(`/all/${id}`);
      }}
      className="apartment-card"
    >
      <div className="image position-relative overflow-hidden">
        <img
          src={images[0]}
          alt="apartment view"
          className="rounded"
          style={{
            height: "340px",
          }}
        />
        <div className="position-absolute top-50 w-100 px-2 d-flex justify-content-between btn-controls">
          <span className="material-icons icon-size rounded-circle">
            chevron_left
          </span>
          <span className="material-icons icon-size rounded-circle">
            chevron_right
          </span>
        </div>
        <div className="position-absolute top-0 w-100 px-2 other-options d-flex justify-content-between align-items-center">
          <div className="rounded bg-success text-light py-1 px-2 m-2 price-range">
            {/* ${priceRange.start} - ${priceRange.end} */}
          </div>
          <div className="d-flex justify-content-center align-items-center rounded-circle icon-size bg-white favorite">
            <span className="material-icons text-success">favorite_border</span>
          </div>
        </div>
      </div>
      <div className="saves-upto my-2">
        <span className="text-muted">Saves up to</span>
        {/* <span className="text-danger mx-1 fw-bold">${savesUpto}</span> */}
      </div>
      <h1 className="h5 my-3 address">{address}</h1>
      <div className="d-flex my-2">
        <div className="d-flex align-items-center text-danger">
          <span className="fw-bold">{bedroom}</span>{" "}
          <span className="room-icon mx-1 material-icons">bed</span> -{" "}
          <span className="fw-bold mx-1">{bathroom}</span>{" "}
          <span className="room-icon mx-1 material-icons">bed</span>
        </div>
        <span className="text-muted mx-1">| Available from</span>
        <span className="text-danger">
          <Moment toNow>{formattedDate}</Moment>
        </span>
      </div>
      <div className="d-flex flex-wrap tags">
        {idealFor &&
          idealFor.map((tag) => (
            <span key={tag} className="text-muted p-1 tag">
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

const mapDisptachToProps = (dispatch) => {
  return {
    redirect: (apartmentId) => dispatch(redirect(apartmentId)),
  };
};

export default connect(null, mapDisptachToProps)(Apartment);
