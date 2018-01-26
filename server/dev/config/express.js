import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();
app.use(compression()); // Compress the coming requests for better performance

//Middleware parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Allows use a proxy
app.set('trust proxy', true);

//Logger
if (process.env.NODE_ENV === 'test') {
	app.use(logger('combined'));
} else {
	app.use(logger('dev'));
}

//End function to handle the errors that comes from express callbacks
if (process.env.NODE_ENV === 'development') {
	app.use(function(err, req, res, next) {
		console.error(`INTERNAL SERVER ERROR: ${err}`);
		res.status(err.status || 500).json({ error: `An internal server error occurred: ${err}` });
	});
}

export default app;
