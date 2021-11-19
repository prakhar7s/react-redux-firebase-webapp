import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import apartmentReducer from "./apartmentReducer";
const rootReducer = combineReducers({
  apartment: apartmentReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
