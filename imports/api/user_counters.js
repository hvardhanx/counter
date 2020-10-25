import { Mongo } from 'meteor/mongo';

export const UserCountersCollection = new Mongo.Collection('user_counters');
