
import './App.css';
import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import {IxVideo} from '@imgix/ix-video';

// wrap the component to
export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Video
        controls
        data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'
        height="400"
        fixed
        poster="https://sdk-test.imgix.net/amsterdam.jpg?txt64=VGVzdGluZyBpeC12aWRlbyBSZWFjdCBhcHA&txt-size=40&txt-color=white&txt-align=middle%2Ccenter&txt-font=Helvetica%20Neue&txt-line=1&txt-line-color=black&txt-fit=max"
        source="https://jdawson.imgix.video/bunny_small_video_4.mp4"
      />
      </header>
    </div>
  );
}

export default App;
