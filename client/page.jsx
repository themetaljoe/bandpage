import React from 'react';
import Header from './header';
import Events from './events';
import Images from './images';
import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact' 
const size = {
  width: '80%',
  height: 80,
};
const view = 'list'; // or 'coverart' 
const theme = 'black'; // or 'white' 
 

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="mask" />
        <div className="page">
          <Header />
          <SpotifyPlayer
            uri="spotify:album:7mDaaI2LDpaPVeamQzLZLo"
            size={size}
            view={view}
            theme={theme}
          />
          <Images />
          <Events />
        </div>
      </div>
    );
  }
}
