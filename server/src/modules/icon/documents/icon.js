import mongoose, {Schema} from 'mongoose'
import timestampsPlugin from 'mongoose-timestamps'


export const IconSchema = new Schema({
    path: {type: String},
    url: {type: String}
});

IconSchema.plugin(timestampsPlugin);

export const Icon = mongoose.model('Icon', IconSchema);