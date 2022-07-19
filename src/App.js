import React from 'react';
import './App.css';
import { Video } from './components/Video';
import { Menu } from './components/Menu';

import Parent from './components/Parent';

export const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
  }

  //change the state src no need to bind use if use Arrow function
  chooseVideo = (newVideo) => {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }


  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />

        {/* Add Parent component example here  */}
        <Parent />
      </div>
    );
  }
}



export default App;