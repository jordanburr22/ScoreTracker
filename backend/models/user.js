import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: String,
	password: String,
});

export default mongoose.model('users', userSchema);
