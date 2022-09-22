import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  description: String,
  isDone: { type: Boolean, default: false },
});
