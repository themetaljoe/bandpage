import React from 'react';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

export default class events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    Meteor.call('getEvents', (err, res) => {
      const events = res.res.data;
      this.setState({ events });
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="events">
        <h1>FEED</h1>
        {
          this.state.events.filter((event, i) => {
            return i < 5;
          })
          .map((event) => {
            console.log(event)
            return (
              <div className='an-event'>
                <a href={`https://www.facebook.com/carrythestorm/posts/${event.id}`}>
                  <div className='message'>
                    {
                      moment(event.created_time).format('MMM Do')
                    }:
                    { ' ' + event.message.split('').filter((letter, i) => i < 200).join('') }
                  </div>
                </a>
              </div>
            );
          })
        }
      </div>
    );
  }
}
