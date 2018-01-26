import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();
app.use(compression()); // Compress the coming requests for better performance

//Middleware parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('trust proxy', true); //Allows use a proxy

//Logger
let mode = 'combined';
if (process.env.NODE_ENV === 'test') mode = 'dev';
app.use(logger(mode));

//End function to handle errors that comes from express callbacks
if (process.env.NODE_ENV === 'development') {
	app.use(function(err, req, res, next) {
		console.error(`INTERNAL SERVER ERROR: ${err}`);
		res.status(err.status || 500).json({ error: `An internal server error occurred: ${err}` });
	});
}

export default app;
