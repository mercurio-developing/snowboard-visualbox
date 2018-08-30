import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAthletes } from "../../actions/athletesActions";
import Loading from "../common/Loading";
import Card from "../../components/card/Card";
import isEmpty from "../../validation/is-empty";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      athletes: "",
      athletesFilter: "",
      searching: false,
      create: false
    };
    this.onChange = this.onChange.bind(this);
    this.CreateAthlete = this.CreateAthlete.bind(this);
    this.undoChanges = this.undoChanges.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAthletes();
  }

  componentDidUpdate(prevProps) {
    if (this.props.athletes !== prevProps.athletes) {
      this.setState({
        athletes: this.props.athletes
      });
    }
    return this.props.athletes;
  }

  onChange(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: [e.target.value]
    });
    console.log(this.state.search);
  }

  CreateAthlete() {
    this.props.history.push("/createAthlete");
  }

  undoChanges() {
    this.setState({
      create: false
    });
  }

  onSubmit(e) {
    this.setState({
      searching: true
    });
    e.preventDefault();
    let athletes = this.state.athletes.athletes;
    console.log(athletes);
    console.log(this.state.search);
    let filter = athletes.filter(
      athlete =>
        athlete["athleteName"] === this.state.search[0] ||
        athlete["olympicGames"] === this.state.search[0]
    );
    console.log(filter);
    this.setState({
      athletesFilter: filter
    });
    console.log(this.state.athletesFilter);
  }

  render() {
    const { athletes, loading } = this.props.athletes;
    let list;
    if (!isEmpty(this.state.athletesFilter) && this.state.searching === true) {
      console.log("show state");
      if (loading === false && this.state.athletesFilter !== null) {
        console.log("show state");

        list = this.state.athletesFilter.map(athlete => (
          <Card key={athlete._id} athlete={athlete} />
        ));
      } else {
        <Loading />;
      }
    } else {
      if (loading === false && athletes !== null) {
        list = athletes.map(athlete => (
          <Card key={athlete._id} athlete={athlete} />
        ));
      } else {
        <Loading />;
      }
    }

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
                  <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-group mb-2">
                      <label>Search Athlete:</label>
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Enter Athlete or Olympic Game"
                        value={this.state.search}
                        onChange={this.onChange}
                      />
                      <input type="submit" className="btn btn-md ml-2" />
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <i
                    className="fas fa-plus-circle float-right"
                    onClick={() => {
                      this.CreateAthlete();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* CARDS */}
          <div className="row">
            <div className="col-xl-10 col-lg-10 mx-auto">{list}</div>
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
  athletes: state.athletes
});

export default connect(
  mapStateToProps,
  { getAthletes }
)(Landing);
