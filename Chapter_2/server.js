const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

let data = {
    user : []
}

app.use(express.urlencoded({ extended: true }));

// Serve static files (like styles.css)
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    console.log('Hello from home page', req.method);
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Serve index.html on /login route
app.get('/login', (req, res) => {
    console.log('Hello from login page');
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Received login data:');
    console.log('Email:', email);
    console.log('Password:', password);
    // Simple response
    data.user.push([email,password])
    console.log("User is added successfully")
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});


app.get('/dashboard', (req, res) => {
    console.log('Hello from dashboard page');
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/data',(req,res) => {
    res.send(data)
})

//CRUD-method create-post read-get update-put and delete-delete

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
