import { GET_ATHLETES, GET_ATHLETE, TRACK_LOADING } from "../actions/types";

const initialState = {
  athletes: [],
  athlete: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ATHLETES:
      return {
        ...state,
        ATHLETES: action.payload,
        loading: false
      };
    case GET_ATHLETE:
      return {
        ...state,
        track: action.payload,
        loading: false
      };
    case TRACK_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
