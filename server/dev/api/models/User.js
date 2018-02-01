import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	googleID: { type: String, unique: true },
	facebookID: { type: String, unique: true },
	twitterID: { type: String, unique: true },
	username: { type: String, required: true, trim: true },
	email: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true
	},
	password: String,
	avatar: {
		type: String,
		validate: function(path) {
			return /^[a-zA-Z]:\\(\w+\\)*\w*$/.test(path);
		},
		message: `This is not a valid path`
	},
	achievements: { type: [ Schema.Types.ObjectId ], ref: 'Achievement' },
	messages: { type: [ Schema.Types.ObjectId ], ref: 'Message' },
	score: { type: Number, min: 0.0, default: 0.0 },
	level: { type: Number, min: 1, max: 30, default: 1 },
	attributes: { type: Schema.Types.ObjectId, ref: 'Attribute' },
	skills: { type: [ Schema.Types.ObjectId ], ref: 'Skill' },
	defeated: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	lastConnection: {
		type: Date,
		default: Date.now,
		validate: function(connectionDate) {
			return new Date(connectionDate) > new Date(this.createdAt);
		},
		message: `This is not a valid path`
	}
});

export default mongoose.model('User', UserSchema);
