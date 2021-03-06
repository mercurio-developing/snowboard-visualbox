import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { connect } from "react-redux";
import {
  deleteAthlete,
  getAthlete,
  setAthleteEditing
} from "../../actions/athletesActions";
import EditInfoCard from "./EditInfoCard";
import InfoCard from "./InfoCard";
import Loading from "../common/Loading";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteId: null,
      isEditing: false,
      athelete: {}
    };

    this.editAthlete = this.editAthlete.bind(this);
    this.deleteAthlete = this.deleteAthlete.bind(this);
    this.undoChanges = this.undoChanges.bind(this, this.props.dispatch);
  }

  editAthlete(id) {
    let athleteId = id;
    if (this.props.editing === false) {
      this.props.getAthlete(athleteId);
      this.setState({
        isEditing: true
      });
    }
  }

  deleteAthlete(id) {
    let athleteId = id;
    this.props.deleteAthlete(athleteId);
  }

  undoChanges() {
    this.props.setAthleteEditing();
    console.log("gato");
    this.setState({
      isEditing: false
    });
  }

  render() {
    const { athlete } = this.props;
    return (
      <div className="row card-materialize mt-2">
        {this.state.isEditing === false ? (
          <div className="col-xl-12">
            <InfoCard
              athlete={athlete}
              editAthlete={this.editAthlete}
              deleteAthlete={this.deleteAthlete}
            />
          </div>
        ) : (
          <div className="col-xl-12">
            {this.props.loading === false && this.props.athleteById !== null ? (
              <EditInfoCard
                athlete={this.props.athleteById}
                undoChanges={this.undoChanges}
              />
            ) : (
              <Loading />
            )}
          </div>
        )}
      </div>
    );
  }
}
Card.Proptypes = {
  getAthlete: PropTypes.func.isRequired,
  athleteById: PropTypes.object.isRequired,
  setAthleteEditing: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  loading: state.athletes.loading,
  athleteById: state.athletes.athleteById,
  editing: state.athletes.editing
});
export default connect(
  mapStateToProps,
  { getAthlete, deleteAthlete, setAthleteEditing }
)(Card);
