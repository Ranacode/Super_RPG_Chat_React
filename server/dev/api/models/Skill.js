import mongoose, { Schema } from 'mongoose';

const SkillSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		title: { type: String, required: true, trim: true },
		description: { type: String, trim: true },
		requiredLevel: { type: Number, min: 1, max: 30 }
		//effect
		// reloadTime
		//modifiers
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Skill', SkillSchema);
