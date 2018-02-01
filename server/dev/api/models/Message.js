import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
	body: { type: String, trim: true, required: true },
	createdAt: { type: Date, default: Date.now() },
	user: { type: Schema.Types.ObjectId, ref: 'User' }
	//aptitudes: String
});

export default mongoose.model('Message', MessageSchema);
