import { connect } from 'react-redux';

import Header from '../stateless/Header';

const mapStateToProps = ({ modules }) => ({ modules });

export default connect(mapStateToProps)(Header);