import React, { Component } from "react";
import PropTypes from "prop-types";
import { updateAthlete } from "../../actions/athletesActions";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";
import { withRouter } from "react-router-dom";

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athlete: {
        athleteName: "",
        gender: "M",
        country: "",
        olympicGames: "",
        medalType: "gold"
      },
      loading: false,
      errors: {
        athleteName: "",
        gender: "",
        country: "",
        olympicGames: "",
        medalType: ""
      },
      athletes: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  selectGender(gender) {
    if (gender === "M") {
      this.setState({
        athlete: {
          ...this.state.athlete,
          gender: "F"
        }
      });
    } else if (gender === "F") {
      this.setState({
        athlete: {
          ...this.state.athlete,
          gender: "M"
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      athlete: {
        ...this.state.athlete,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let counter;
    // EMPTY VALIDATION
    Object.keys(this.state.athlete).map(key => {
      if (isEmpty(this.state.athlete[key])) {
        counter = +1;
        console.log("empty");
        this.setState({
          errors: {
            ...this.state.errors,
            [key]: "This field is empty, please fill with the"
          }
        });
      }
    });
    this.props.updateAthlete(this.state.athlete, this.props.history);
  }
  render() {
    let genderPicture, medalPicture;
    const {
      athleteName,
      gender,
      country,
      olympicGames,
      medalType
    } = this.state.athlete;
    // GENDER////////////////////////

    if (gender === "M") {
      genderPicture = (
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/assets/male.svg"}
          alt=""
        />
      );
    } else if (gender === "F") {
      genderPicture = (
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/assets/female.svg"}
          alt=""
        />
      );
    } else {
      <p>NOT FOUND</p>;
    }

    // MEDAL ///////////////////////
    if (medalType === "gold") {
      medalPicture = (
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/assets/gold.svg"}
          alt=""
        />
      );
    } else if (medalType === "silver") {
      {
        medalPicture = (
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/assets/silver.svg"}
            alt=""
          />
        );
      }
    } else if (medalType === "bronze") {
      {
        medalPicture = (
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/assets/bronze.svg"}
            alt=""
          />
        );
      }
    }
    return (
      <form onSubmit={this.onSubmit} className="row">
        <div className="col-xl-10 col-lg-12">
          <div className="row">
            <div className="col-xl-3 col-lg-3 my-auto">
              <div className="row">
                <div className="col-10 mx-auto">{genderPicture}</div>
              </div>
              <div className="row text-center">
                <div className="col-8 mx-auto">
                  <i
                    className="fas fa-arrow-left mr-2"
                    onClick={() => {
                      this.selectGender(this.state.athlete.gender);
                    }}
                  />
                  <i
                    className="fas fa-arrow-right ml-2"
                    onClick={() => {
                      this.selectGender(this.state.athlete.gender);
                    }}
                  />
                </div>
              </div>
              {!isEmpty(this.state.errors.gender) ? (
                <p style={{ color: "red" }}>{this.state.errors.gender}</p>
              ) : null}
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="row pt-3">
                <div className="col-xl-12 col-lg-12">
                  <input
                    className="form-control mt-2"
                    name="athleteName"
                    placeholder="Enter Athlete Name"
                    value={athleteName}
                    type="text"
                    onChange={this.onChange}
                    defaultValue=""
                  />
                  {!isEmpty(this.state.errors.athleteName) ? (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {this.state.errors.athleteName} the name
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <input
                    className="form-control mt-2"
                    name="country"
                    placeholder="Enter Country"
                    value={country}
                    type="text"
                    onChange={this.onChange}
                    defaultValue=""
                  />
                  {!isEmpty(this.state.errors.country) ? (
                    <p style={{ color: "red" }}>
                      {this.state.errors.country} the country
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <input
                    className="form-control mt-2"
                    name="olympicGames"
                    placeholder="Enter Olympic Game"
                    value={olympicGames}
                    type="text"
                    onChange={this.onChange}
                    defaultValue=""
                  />
                  {!isEmpty(this.state.errors.olympicGames) ? (
                    <p style={{ color: "red" }}>
                      {this.state.errors.olympicGames} the Olympic Game
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 my-auto">
              <div className="row my-auto">
                <div className="col-10 mx-auto">{medalPicture}</div>
              </div>
              <div className="row text-center">
                <div className="col-10 mx-auto p-0">
                  <div className="form-group">
                    <select
                      name="medalType"
                      className="form-control mt-3"
                      value={medalType}
                      onChange={this.onChange}
                    >
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="bronze">Bronze</option>
                    </select>
                    {!isEmpty(this.state.errors.medalType) ? (
                      <p style={{ color: "red" }}>
                        {this.state.errors.medalType}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-xl-2  pl-5 my-auto">
          <button className="btn btn-md">
            <i
              className="fas fa-undo-alt"
              onClick={() => {
                this.props.history.push("/");
              }}
            />
          </button>
          <input
            type="submit"
            value="submit"
            className=" btn btn-success mt-2"
          />
        </div>
      </form>
    );
  }
}

CreateCard.propTypes = {
  undoChanges: PropTypes.func.isRequired,
  athletes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  athletes: state.athletes
});

export default connect(
  mapStateToProps,
  { updateAthlete }
)(withRouter(CreateCard));
