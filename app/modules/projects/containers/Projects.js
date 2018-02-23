import { connect } from "react-redux";
import Projects from "../components/Projects";
import { loadProjects } from "../actions/projects";

const mapStateToProps = ({ projects }) => ({ projects });
const mapDispatchToProps = dispatch => ({
  loadProjects: () => dispatch(loadProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);