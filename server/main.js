import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { GlobalCountersCollection } from '/imports/api/counters';
import { UserCountersCollection } from '/imports/api/user_counters';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }

  // Create if no counter exists
  if (GlobalCountersCollection.find().count() == 0) {
    GlobalCountersCollection.insert({counter: 0})
  } else {
    // Get the latest one if more than zero doc exist
    let doc = GlobalCountersCollection.findOne();
    GlobalCountersCollection.update({ _id: doc._id }, {$set: {counter: 0}})
  }

  // Add a callback whenever a new client connects
  Meteor.onConnection(onConnectionCallback);
});

function onConnectionCallback(conn) {
  console.log("** New Connection ID = " + conn.id);
  // Create a new document in `user_counters` collections with counter zero
  UserCountersCollection.insert({_id: conn.id, counter: 0});
}
