import mongoose, {Schema} from 'mongoose';
import timestampsPlugin from 'mongoose-timestamps';

let ObjectId = Schema.ObjectId;

export const TokenSchema = new Schema({
    user: {type: ObjectId, model: 'User'},
    token: {type: String}
});

TokenSchema.plugin(timestampsPlugin);

export const Token = mongoose.model("Token", TokenSchema);