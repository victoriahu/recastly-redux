import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';


const mapDispatchToProps = (dispatch) => {
    return {
      handleSearchInputChange: q => {
        dispatch(handleVideoSearch(q))
      }
    }
  }

var SearchContainer = connect(null, mapDispatchToProps)(Search);


//Search.js is our component that we want to connect to
//handleSearchChange is our dispatch action creator
//mapStateToProps... handleInputChange accepts state






//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
