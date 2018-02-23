import { connect } from "react-redux";
import Publications from "../components/Publications";
import { loadPublications } from "../actions/publications";


const mapStateToProps = ({ publications }) => ({ publications });

const mapDispatchToProps = dispatch => ({
  loadPublications: () => dispatch(loadPublications())
});

export default connect(mapStateToProps, mapDispatchToProps)(Publications);