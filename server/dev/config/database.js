import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

let mongoURI = '';
const options = {
	autoIndex: false,
	reconnectTries: Number.MAX_VALUE,
	reconnectInterval: 500,
	poolSize: 10,
	bufferMaxEntries: 0
};
if (process.env.NODE_ENV === 'development') {
	mongoURI = 'mongodb://localhost:27017/superSaiyanChat';
} else if (process.env.NODE_ENV === 'development') {
	mongoURI = 'mongodb://localhost:27017/superSaiyanChatTest';
} else {
	//Here comes the mongo database for production
}

export default mongoose.connect(mongoURI, options);
