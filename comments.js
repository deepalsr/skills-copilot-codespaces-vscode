// Create web server for comment system
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory storage for comments
let comments = [];

// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    if (!author || !text) {
        return res.status(400).json({ error: 'Author and text are required' });
    }                   
    const newComment = { id: comments.length + 1, author, text };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
app.listen(port, () => {
    console.log(`Comment system server running at http://localhost:${port}`);
});             
