import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Nav from '../stateless/Nav';

const mapStateToProps = ({ modules }) => ({ modules });

export default connect(mapStateToProps)(withRouter(props => <Nav {...props}/>));