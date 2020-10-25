import { Mongo } from 'meteor/mongo';

export const GlobalCountersCollection = new Mongo.Collection('counters');
