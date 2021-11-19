import { REDIRECT } from "../actions/actions";

const initState = {
  redirectTo: null,
};

const apartmentReducer = (state = initState, action) => {
  switch (action.type) {
    case REDIRECT:
      return { redirectTo: action.payload };
    default:
      return state;
  }
};

export default apartmentReducer;
