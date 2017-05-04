import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class events extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    Meteor.call('getImages', (err, res) => {
      const images = res.items;
      this.setState({ images });
    })
  }

  render() {
    return (
      <div className="images">
        <h1>PHOTOS</h1>
        {
          this.state.images.filter((image, i) => {
            return i < 10;
          })
          .map((image) => {
            return (
              <div className='an-image'>
                <img src={image.images.low_resolution.url} />
              </div>
            );
          })
        }
      </div>
    );
  }
}
