import mongoose, { Schema } from 'mongoose';

const AchievementSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		title: { type: String, required: true, trim: true },
		description: { type: String, trim: true },
		unlockAt: Date
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Achievement', AchievementSchema);
