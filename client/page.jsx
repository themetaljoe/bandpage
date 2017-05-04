import React from 'react';
import Header from './header';
import Events from './events';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="mask" />
        <div className="page">
          <Header />
          <Events />
        </div>
      </div>
    );
  }
}
