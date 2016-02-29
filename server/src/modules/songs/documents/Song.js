/** @flow */
import mongoose, {Schema} from 'mongoose';
import timestampsPlugin from 'mongoose-timestamps';
import {STATUS_ACTIVE} from './../constants'
let ObjectId = Schema.ObjectId;

export const SongSchema = new Schema({
    name: {type: String},
    artist: {type: ObjectId, model: "Artist"},
    status: {type: String, default: STATUS_ACTIVE},
    duration: {type: Number},
    url: {type: String},
    path: {type: String}
});

SongSchema.plugin(timestampsPlugin);

export const Song = mongoose.model("Song", SongSchema);
