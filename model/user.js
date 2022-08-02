import { Schema, model, models } from 'mongoose';
const userSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    salary: Number,
    date: String,
    status: String,
});
const Users = models.user || model('user', userSchema);
export default Users;