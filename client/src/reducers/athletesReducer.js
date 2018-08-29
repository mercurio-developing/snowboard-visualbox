import {
  GET_ATHLETES,
  GET_ATHLETE,
  ATHLETE_LOADING,
  ATHLETE_EDITING
} from "../actions/types";

const initialState = {
  athletes: [],
  athleteById: {},
  loading: false,
  editing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ATHLETES:
      return {
        ...state,
        athletes: action.payload,
        loading: false
      };
    case GET_ATHLETE:
      return {
        ...state,
        athleteById: action.payload,
        editing: true
        // loading: false
      };
    case ATHLETE_LOADING:
      return {
        ...state,
        loading: true
      };
    case ATHLETE_EDITING:
      return {
        ...state,
        editing: false
      };

    default:
      return state;
  }
}
