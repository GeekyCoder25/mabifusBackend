const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes/mabifusRoutes');
const PORT = process.env.PORT || 3000;
// const dbURI = 'mongodb://127.0.0.1:27017/mabifus';
const dbURI = process.env.MONGO_URI;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(mongo => {
		console.log(`mongodb running on ${mongo.connection.host}`);
		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}!`);
		});
	})
	.catch(err => console.log(err.message));

app.use('/api', routes);
app.get('/', (req, res) => {
	res.redirect('https://mabifus.vercel.app');
});
