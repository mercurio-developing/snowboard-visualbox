import axios from "axios";
import isEmpty from "../validation/is-empty";

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ATHLETES,
  GET_ATHLETE,
  ATHLETE_LOADING,
  ATHLETE_EDITING
} from "./types";

export const getAthletes = () => dispatch => {
  dispatch(setAthleteLoading());
  axios
    .get("/api/athletes/all")
    .then(res => {
      let athletes = res.data;
      dispatch({
        type: GET_ATHLETES,
        payload: athletes
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ATHLETES,
        payload: null
      });
    });
};

export const getAthlete = id => dispatch => {
  // dispatch(setAthleteLoading());
  // if (isEmpty(query)) {
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: "Please search a Athlete"
  //   });
  // } else {
  //   dispatch(clearErrors());
  // }
  // dispatch(setAthleteEditing());

  axios
    .get(`/api/athletes/${id}`)
    .then(res => {
      let athlete = res.data;
      console.log(res);
      dispatch({
        type: GET_ATHLETE,
        payload: athlete
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ATHLETE,
        payload: null
      });
    });
};

export const updateAthlete = (athlete, history) => dispatch => {
  axios.post("/api/athletes/", athlete).then(res => history.push("/"));
  // .catch(err =>
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   })
  // );
};

export const deleteAthlete = id => dispatch => {
  console.log(id);
  axios.delete(`/api/athletes/${id}`).then(res => window.location.reload());
  // .catch(err =>
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   })
  // );
};

// Set loading state
export const setAthleteLoading = () => {
  return {
    type: ATHLETE_LOADING
  };
};

export const setAthleteEditing = () => {
  return {
    type: ATHLETE_EDITING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
