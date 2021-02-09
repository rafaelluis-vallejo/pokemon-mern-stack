import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface ExerciseSchema {
  username: String;
  description: String;
  type: number;
  date: Date;
}

const exerciseSchema = new Schema({
    username: { type: String, required:true },
    description: { type: String, required: true },
    duration: { type: Number, required: true},
    date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;