import mongoose, {Schema} from 'mongoose';
import authPlugin from 'passport-local-mongoose';
import timestampsPlugin from 'mongoose-timestamps';

export const UserSchema = new Schema({
    name: {type: Object, default: {first: "", last: ""}},
    email: {type: String}
});


UserSchema.plugin(authPlugin);
UserSchema.plugin(timestampsPlugin);

export const User = mongoose.model("User", UserSchema);