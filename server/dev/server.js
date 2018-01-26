import app from './config/express';
import mongoDB from './config/database';

/*You need to do a succesfully connection with the database
to allow server start listening*/
mongoDB
	.then(() => {
		console.log('CONNECTED TO MONGODB SUCCESFULLY');
		const PORT = process.env.PORT || 8000;

		app.listen(PORT, (error) => {
			if (error) return next(error);
			console.log(`SERVER LISTENING ON PORT ${PORT}...`);
		});
	})
	.catch((error) => console.error(error));
