import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//changeVideo is our action
//we want to give a reducer an action and state
//the reducer we're in contact with: is changeVideo aka currentVideo.js
//the property we want to pass back to changeVideo is the video aka the current Video we're on
//we want to pass in the video name from VideoList to changeVideo


  const mapStateToProps = (State) => {
    return {videos: State.videoList};
  }

  const mapDispatchToProps = (dispatch) => {
    return {handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video))
      }
    }
  }
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

  var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


export default VideoListContainer;
