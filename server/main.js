import { Meteor } from 'meteor/meteor';
import FacebookApi from 'fbgraph';
import rp from 'request-promise';

Meteor.methods({
  getEvents() {
    return new Promise((resolve, reject) => {
      FacebookApi.get('/carrythestorm/posts?access_token=765736816923613|bb7bbe80b14f5b7240a6118c66aad28e&limit=100', (err, res) => {
        resolve({err, res});
      });
    });
  },
  getImages() {
    var options = {
      uri: 'https://www.instagram.com/carrythestorm/media/?min_id=1045341392067624850_3108326',
      json: true,
    };
    return rp.get(options);
  }
});