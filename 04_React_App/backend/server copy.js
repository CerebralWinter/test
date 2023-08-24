const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Dummy user data for demonstration
const dummyUser = {
    username: 'user',
    password: 'password',
    name: 'John Doe',
};

const SECRET_KEY = 'mysecretkey';

app.post('/api/authenticate', (req, res) => {
    const { username, password } = req.body;

    // In a real-world app, you should verify the user's credentials from a database
    if (username === dummyUser.username && password === dummyUser.password) {
        // Generate a token
        const token = jwt.sign({ name: dummyUser.name }, SECRET_KEY, {
            expiresIn: '1h',
        });

        // Send the token
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});