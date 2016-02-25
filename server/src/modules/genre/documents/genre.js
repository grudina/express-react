import mongoose, {Schema} from 'mongoose'
import timestampsPlugin from 'mongoose-timestamps'


export const GenreSchema = new Schema({
    name: {type: String},
    description: {type: String}
});

GenreSchema.plugin(timestampsPlugin);

export const Genre = mongoose.model('Genre', GenreSchema);