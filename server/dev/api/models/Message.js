import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema(
	{
		body: { type: String, trim: true, required: true },
		user: { type: Schema.Types.ObjectId, ref: 'User' }
		//aptitudes
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Message', MessageSchema);
