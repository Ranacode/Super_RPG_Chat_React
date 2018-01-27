import http from 'http';
import SocketServer from 'socket.io';
import app from './config/express';
import mongoDB from './config/database';

/*You need to do a succesfully connection with the database
to allow server start listening*/
mongoDB
	.then(() => {
		console.log('CONNECTED TO MONGODB SUCCESFULLY');
		//Socket server setup
		const server = http.createServer(app);
		const io = new SocketServer(server);

		const PORT = process.env.PORT || 8000;
		server.listen(PORT, (error) => {
			error ? process.exit() : console.log(`SERVER LISTENING ON PORT ${PORT}...`);
		});
	})
	.catch((error) => console.error(error));
