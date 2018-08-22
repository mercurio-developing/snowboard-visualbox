import axios from "axios";
import isEmpty from "../validation/is-empty";

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ATHLETES,
  ATHLETE_LOADING
} from "./types";

export const getAtheletes = query => dispatch => {
  dispatch(setAthleteLoading());
  if (isEmpty(query)) {
    dispatch({
      type: GET_ERRORS,
      payload: "Please search a Athlete"
    });
  } else {
    dispatch(clearErrors());
    axios
      .get("/api/atheletes")
      .then(res => {
        let atheletes = res.data;
        dispatch({
          type: GET_ATHLETES,
          payload: atheletes
        });
      })
      .catch(err => {
        dispatch({
          type: GET_ATHLETES,
          payload: null
        });
      });
  }
};

// Set loading state
export const setAthleteLoading = () => {
  return {
    type: ATHLETE_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
