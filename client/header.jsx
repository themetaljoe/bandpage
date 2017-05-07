import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      socialIcons: [{
        name: 'facebook', href: 'https://www.facebook.com/carrythestorm/'
      },{
        name: 'twitter', href: 'https://www.twitter.com/carrythestorm/'
      },{
        name: 'instagram', href: 'https://www.instagram.com/carrythestorm/'
      },{
        name: 'youtube', href: 'https://www.youtube.com/channel/UCe1IFN0qfZcBT4DDuugdKdw'
      },{
        name: 'music', href: 'https://itunes.apple.com/us/artist/carry-the-storm/id412986445'
      },{
        name: 'paper-plane', href: ' mailto:carrythestorm@yahoo.coms'
      }]
    }
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="logo.png" />
        </div>
        <h1 className='title-header'>New EP out Soon</h1>
            <div className="icons">
        {
          this.state.socialIcons.map((icon) => (
            <div className="social-icon">
              <a className={`btn btn-social-icon btn-${icon.name}`} href={icon.href}>
              <span className={`fa fa-lg fa-${icon.name}`}></span>
              </a>
            </div>
          ))
        }
            </div>
      </div>
    );
  }
}
