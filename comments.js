/// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create comments
const comments = [
  { name: 'John', comment: 'Hello World!' },
  { name: 'Mary', comment: 'Hello Universe!' }
];
// Path: /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Path: /comment
app.get('/comment', (req, res) => {
  const comment = comments[Math.floor(Math.random() * comments.length)];
  res.json(comment);
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
```

## 2.2. Express Routing

### 2.2.1. Routing

- **Routing**: is the process of selecting a path for traffic in a network or between or across multiple networks. It's a way to define a function that will be executed when a client requests a specific path.

### 2.2.2. Routing in Express

- **Routing in Express**: is a way to handle different HTTP requests with different paths.

``