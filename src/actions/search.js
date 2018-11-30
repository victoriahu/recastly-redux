import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  
  // var callback = function(data) {
  //   dispatch(changeVideoList(data));
  //   dispatch(changeVideo(data[0]));
  // };
  //TODO:  Write an asynchronous action to handle a video search!
  // searchYouTube({key: YOUTUBE_API_KEY, query: q}, callback);
  // return changeVideoList(data);
  return _.debounce((dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(data) {
    dispatch(changeVideoList(data));
    dispatch(changeVideo(data[0]));
    });
  }, 2000);
};
// const boundHandleVideoSearch = q => dispatch(handleVideoSearch(q));


export default handleVideoSearch;
