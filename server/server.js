const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const db = require('./postgres')

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello 👋');
});

app.get('/bye', (req, res) => {
	res.send('Bye 👋');
});

// Sample APIs
app.get('/sample-users', db.getUsers)
app.get('/sample-users/:id', db.getUserById)
app.post('/sample-users', db.createUser)
app.put('/sample-users/:id', db.updateUser)
app.delete('/sample-users/:id', db.deleteUser)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});