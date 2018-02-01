import mongoose, { Schema } from 'mongoose';

const AttributesSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
		life: { type: Number, min: 10, max: 9999 },
		energy: { type: Number, min: 5, max: 100 },
		strength: { type: Number, min: 1, max: 50 },
		defense: { type: Number, min: 1, max: 50 },
		chaining: { type: Number, min: 2.0, max: 15.0 },
		crit: { type: Number, min: 1.5, max: 10.0 }
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Attributes', AttributesSchema);
