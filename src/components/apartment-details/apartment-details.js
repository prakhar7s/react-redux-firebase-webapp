import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { redirect } from "../../store/actions/actions";
import Apartment from "../apartment/apartment";
import Loader from "../loader/Loader";

const ApartmentDetails = (props) => {
  localStorage.setItem("isDetailedView", false);

  const [apartment, setApartment] = useState();

  useEffect(() => {
    setApartment(() => {
      let temp = {};
      if (props.apartments) {
        temp = props.apartments.filter(
          (apartment) => apartment.id === props.match.params.apartmentId
        )[0];
      }

      return temp;
    });
  }, [props.apartments, props.match.params.apartmentId]);

  return (
    <div className="container d-flex justify-content-center h-100 w-100">
      <span
        style={{
          cursor: "pointer",
        }}
        className="material-icons icon-size rounded-circle my-4 mx-2"
        onClick={() => {
          props.redirect(null);
          props.history.push("/");
        }}
      >
        chevron_left
      </span>
      {apartment ? <Apartment {...apartment} isSingle /> : <Loader />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apartments: state.firestore.ordered.catlogue,
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
)(ApartmentDetails);
