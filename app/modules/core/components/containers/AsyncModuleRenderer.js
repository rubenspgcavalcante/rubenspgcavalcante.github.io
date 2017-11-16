import { connect } from 'react-redux';
import { loading } from "../../actions/loading";
import AsyncModuleRenderer from "../AsyncModuleRenderer";
import { moduleLoaded } from "../../actions/modules";

const mapStateToProps = ({ modules }) => ({ modules });

const mapDispatchToProps = (dispatch) => ({
  loading: (on) => dispatch(loading(on)),
  moduleLoaded: (module) => dispatch(moduleLoaded(module))
});

export default connect(mapStateToProps, mapDispatchToProps)(AsyncModuleRenderer);