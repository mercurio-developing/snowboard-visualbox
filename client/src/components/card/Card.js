import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { connect } from "react-redux";
import { deleteAthlete, getAthlete } from "../../actions/athletesActions";
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
    this.undoChanges = this.undoChanges.bind(this);
  }

  editAthlete(id) {
    let athleteId = id;
    this.props.getAthlete(athleteId);
    this.setState({
      isEditing: true
    });
    console.log(this.state.isEditing);
  }

  deleteAthlete(id) {
    let athleteId = id;
    this.props.deleteAthlete(athleteId);
  }
  // shouldComponentUpdate(prevProps, nextProps, nextState) {
  //   console.log(prevProps);
  //   if (prevProps.editing !== nextProps.editing) {
  //     this.setState({
  //       isEditing: this.props.editing
  //     });
  //   }
  //   return this.state.is;
  // }

  undoChanges() {
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
            {
              (console.log(this.props.loading, this.props.athleteById),
              this.props.loading === false &&
              this.props.athleteById !== null ? (
                <EditInfoCard athlete={this.props.athleteById} />
              ) : (
                <Loading />
              ))
            }
          </div>
        )}
      </div>
    );
  }
}
Card.Proptypes = {
  getAthlete: PropTypes.func.isRequired,
  athleteById: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.athletes.loading,
  athleteById: state.athletes.athleteById
});
export default connect(
  mapStateToProps,
  { getAthlete, deleteAthlete }
)(Card);
