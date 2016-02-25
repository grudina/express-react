import mongoose, {Schema} from 'mongoose'
import timestampsPlugin from 'mongoose-timestamps'

let ObjectId = Schema.ObjectId;

export const AlbumSchema = new Schema({
    name: {type: String},
    artist: {type: ObjectId, model: 'Artist'},
    genre: {type: ObjectId, model: 'Genre'},
    songs: [{type: ObjectId, model: 'Song'}],
    icon: {type: ObjectId, model: 'Icon'}
});

AlbumSchema.plugin(timestampsPlugin);

export const Album = mongoose.model('Album', AlbumSchema);