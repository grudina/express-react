import mongoose, {Schema} from 'mongoose';
import timestampsPlugin from 'mongoose-timestamp'

let ObjectId = Schema.ObjectId;

export const ArtistSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    genre: {type: ObjectId, model: 'Genre'},
    description: {type: String},
    album: [{type: ObjectId, model: 'Album'}],
    icon: {type: ObjectId, model: 'Icon'}
});

ArtistSchema.plugin(timestampsPlugin);

export const Artist = mongoose.model("Artist", ArtistSchema);