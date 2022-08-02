import mongoose from 'mongoose';

const connectMongo = async() => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGGO_URL);
        if (connection.readyState === 1) {
            console.log('MongoDB Connected');
        }
    } catch (err) {
        return Promise.reject(err);
    }
};

export default connectMongo;