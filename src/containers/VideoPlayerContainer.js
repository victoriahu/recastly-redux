import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (State) => {
  console.log(State);
  return {video: State.currentVideo};
} 


var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
