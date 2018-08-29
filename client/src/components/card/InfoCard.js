import React, { Component } from "react";
import PropTypes from "prop-types";
class InfoCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      athleteName,
      gender,
      country,
      olympicGames,
      medalType,
      _id
    } = this.props.athlete;
    let genderPicture;
    let medalPicture;

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
      <div className="row">
        <div className="col-lg-10 col-xl-10">
          <div className="row">
            <div className="col-xl-3 col-lg-3">{genderPicture}</div>
            <div className="col-xl-7 col-lg-7">
              <div className="row pt-3">
                <div className="col-xl-12 col-lg-12">
                  <p className="h5">
                    <b>Fullname: </b> {athleteName}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <p className="h5">
                    <b>Gender: </b>
                    {gender}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <p className="h5">
                    <b>Country: </b>
                    {country}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <p className="h5">
                    <b>Olympic Game: </b>
                    {olympicGames}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2">
              <div className="row">{medalPicture}</div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-xl-2  pl-5 my-auto">
          <button className="btn btn-md">
            <i
              className="fas fa-trash"
              onClick={() => {
                this.props.deleteAthlete(_id);
              }}
            />
          </button>
          <button className="btn btn-md pt-2">
            <i
              className="fas fa-edit"
              onClick={() => {
                this.props.editAthlete(_id);
              }}
            />
          </button>
        </div>
      </div>
    );
  }
}

InfoCard.propTypes = {
  athlete: PropTypes.object.isRequired,
  editAthlete: PropTypes.func.isRequired,
  deleteAthlete: PropTypes.func.isRequired
};

export default InfoCard;
