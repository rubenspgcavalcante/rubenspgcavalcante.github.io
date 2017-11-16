import React from 'react';
import { connect } from 'react-redux';

import Header from '../stateless/Header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ modules }) => ({ modules });

export default connect(mapStateToProps)(withRouter((props) => <Header {...props} />));