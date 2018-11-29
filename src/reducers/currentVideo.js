import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  
  // if (state === undefined) {
  //   return null;
  // }

//changeVideo.video = 'script: this is my only line'
// passing in to currentVideoReducer {script: 'this is my only line.'}

  if (action.type === 'CHANGE_VIDEO') {

    // var obj = Object.assign({}, state, {currentVideo: action.video});

    //{}

    return action.video;
    // console.log("if action type, return test", test);
    // return test;

    //{currentVideo: {script: "this is my only line"}}
    //{script: "this is my only line"}
  }
  return state;
};

export default currentVideoReducer;
