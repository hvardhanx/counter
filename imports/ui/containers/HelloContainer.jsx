import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { GlobalCountersCollection } from "../../api/counters";
import { UserCountersCollection } from "../../api/user_counters";

import Hello from "../Hello";

export default withTracker(() => {
    globalCounter = GlobalCountersCollection.findOne()
    userCounter = UserCountersCollection.findOne({"_id" : Meteor.connection._lastSessionId})
    const dataExists = !!globalCounter && !!userCounter
    return {
        globalCounter: dataExists ? globalCounter : -1,
        userCounter  : dataExists ? globalCounter.counter - userCounter.counter : -1
    };
})(Hello);
