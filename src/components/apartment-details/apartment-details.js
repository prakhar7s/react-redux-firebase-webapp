import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
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
      {apartment ? <Apartment {...apartment} isSingle /> : <Loader />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apartments: state.firestore.ordered.catlogue,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    {
      collection: "city",
      doc: "mUYWZuKZD09ZGo4flvCm",
      storeAs: "catlogue",

      subcollections: [
        {
          collection: "locality",
          doc: "a9OhS5nl3TZSVsUpSXaF",
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
