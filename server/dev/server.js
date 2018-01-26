import app from './config/express';

const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
	if (error) return next(error);
	console.log(`SERVER LISTENING ON PORT ${PORT}...`);
});
