import React, {Component} from 'react'
import { connect } from 'react-redux'
import Hall from '../containers/Hall'
import { getInitialState } from '../actions'


class App extends Component {
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(getInitialState())
  }
  render(){
    return (
      <div>
        <Hall />
      </div>
    )
  }
}

export default connect()(App)
