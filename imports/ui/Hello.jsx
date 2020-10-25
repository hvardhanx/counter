import React from 'react';
import { Meteor } from 'meteor/meteor'
import { GlobalCountersCollection } from '../api/counters'
import { UserCountersCollection } from '../api/user_counters'

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: -1}
    this.increment = this.increment.bind(this);
  }

  increment() {
    // Update the current global counter
    let doc = GlobalCountersCollection.findOne();
    GlobalCountersCollection.update({ _id: doc._id }, {$set: {counter: this.state.counter + 1}})
    
    // Update the current client's counter
    let currUserPreviousCounter = UserCountersCollection.findOne({"_id" : Meteor.connection._lastSessionId})
    UserCountersCollection.update({ _id: Meteor.connection._lastSessionId }, {$set: {counter: currUserPreviousCounter.counter + 1}})
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    if (this.props.globalCounter !== -1) {
      this.state = {counter: this.props.globalCounter.counter}
		} else {
      this.state = {counter: -1}
    }

    return this.props.userCounter == -1 ? <p>Loading...</p> : (
      <div>
        <button onClick={this.increment}>Click Me</button>
        <p>Everyone pressed the button {this.state.counter} times.</p>
        <p>Someone else pressed the button {this.props.userCounter} times.</p>
      </div>
    );
  }
}
