import "./apartment.css";

import { redirect } from "../../store/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Apartment = (props) => {
  const {
    img,
    priceRange,
    tags,
    address,
    id,
    savesUpto,
    availableFrom,
    isSingle,
  } = props;

  const formattedDate = Date(availableFrom).substr(4, 6);

  useEffect(() => {
    // for back button
    window.location.hash = "no-back-button";

    // Again because Google Chrome doesn't insert
    // the first hash into the history
    window.location.hash = "Again-No-back-button";

    window.onhashchange = function () {
      window.location.hash = "";
    };
  }, []);
  return (
    <div
      onClick={() => {
        localStorage.setItem("isDetailedView", true);
        props.redirect(`/all/${id}`);
      }}
      className="apartment-card"
    >
      <div className="image position-relative overflow-hidden">
        <img
          src={img}
          alt="apartment view"
          className="rounded"
          style={{
            height: isSingle ? "340px" : "190px",
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
            ${priceRange.start} - ${priceRange.end}
          </div>
          <div className="d-flex justify-content-center align-items-center rounded-circle icon-size bg-white favorite">
            <span className="material-icons text-success">favorite_border</span>
          </div>
        </div>
      </div>
      <div className="saves-upto my-2">
        <span className="text-muted">Saves up to</span>
        <span className="text-danger mx-1 fw-bold">${savesUpto}</span>
      </div>
      <h1 className="h5 my-3 address">{address}</h1>
      <div
        className="d-flex my-2
      "
      >
        <div className="d-flex align-items-center text-danger">
          <span className="fw-bold">1</span>{" "}
          <span className="room-icon mx-1 material-icons">bed</span> -{" "}
          <span className="fw-bold mx-1">2</span>{" "}
          <span className="room-icon mx-1 material-icons">bed</span>
        </div>
        <span className="text-muted mx-1">| Available from</span>
        <span className="text-danger">{formattedDate}</span>
      </div>
      <div className="d-flex flex-wrap tags">
        {tags &&
          tags.map((tag) => (
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
