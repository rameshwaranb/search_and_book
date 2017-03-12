import React from 'react'
import { connect } from 'react-redux'
import { getInitialState } from '../actions'


const mapStateToProps = (state, ownProps) => ({ halls: state.halls });


const mapDispatchToProps = (dispatch, ownProps) => {
    return { onButtonClick: function(){
      dispatch(getInitialState());
    }
  };

}

let Hall = ({halls, onButtonClick}) => {
  return (
    <div>
    <ul>
    {
      halls.map((val, index) => {
        return (<li key={index}>
        {val.name}
        </li>)

      })
    }
    </ul>
    <button onClick={onButtonClick}>refresh</button>
    </div>
  )
}

Hall = connect(mapStateToProps, mapDispatchToProps)(Hall)


export default Hall
