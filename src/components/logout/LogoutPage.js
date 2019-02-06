import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LOGOUT_REQUESTED } from '../../actions/types';
import history from '../../history';

class LogoutPage extends Component {


  componentWillMount() {
      
    sessionStorage.removeItem("token");     
    this.props.dispatch({
      type: LOGOUT_REQUESTED
    })
    history.push('/');

  }
  render() {
    return null;
  }
}

export default connect()(LogoutPage);