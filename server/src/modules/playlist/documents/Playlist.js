import mongoose, {Schema} from 'mongoose';
import timestampsPlugin from 'mongoose-timestamps';
import {STATUS_ACTIV} from './../constants'
let ObjectId = Schema.ObjectId;

export const PlaylistSchema = new Schema({
    name: {type: String},
    creator: {type: ObjectId, model: 'User'},
    artist: [{type: ObjectId, model: 'Artist'}],
    songs: [{type: ObjectId, model: 'Song'}],
    type: {type: String},
    status: {type: String, default: STATUS_ACTIV}
});

PlaylistSchema.plugin(timestampsPlugin);

export const Playlist = mongoose.model("Playlist", PlaylistSchema);