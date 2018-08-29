import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAthletes } from "../../actions/athletesActions";
import Loading from "../common/Loading";
import Card from "../../components/card/Card";
import "./Landing.css";
class Landing extends Component {
  componentDidMount() {
    this.props.getAthletes();
  }

  render() {
    const { athletes, loading } = this.props.athletes;
    return (
      <div className="mt-5 row">
        <div className="col-xl-12 col-lg-12 mx-auto">
          {/* LOGO */}
          <div className="row ">
            <div className="col-xl-2 col-lg-2 mx-auto">
              <img
                className="img-fluid  "
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                alt=""
              />
            </div>
          </div>
          {/* SEARCH AND ADD */}
          <div className="row mb-5 mt-5">
            <div className="col-10 mx-auto my-auto">
              <div className="row h-100">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <form className="form-inline">
                    <div className="form-group mb-2">
                      <label>Search Athlete:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Athlete or Olympic Game"
                      />
                      <input type="submit" className="btn btn-md ml-2" />
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <i className="fas fa-plus-circle float-right" />
                </div>
              </div>
            </div>
          </div>
          {/* CARDS */}
          <div className="row">
            <div className="col-xl-10 col-lg-10 mx-auto">
              {loading === false && athletes !== null ? (
                athletes.map(athlete => (
                  <Card key={athlete._id} athlete={athlete} />
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  getAthletes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  athletes: state.athletes,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getAthletes }
)(Landing);
