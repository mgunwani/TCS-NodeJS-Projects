
const express = require('express');
const app = express();

const courses = [
    { id: 101, name: "Java", price: 2000 },
    { id: 102, name: "C#", price: 3000 },
    { id: 103, name: "C++", price: 2500 }
];

// GET Request: http://localhost:5001
app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>');
})

// GET Request: http://localhost:5001/courses
app.get('/courses', (req, res) => {
    res.send(courses);
})

// GET Request: http://localhost:5001/coursesbyid/102
app.get('/coursesbyid/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with the given ID is not found.');
    } else {
        res.status(200).send(course);
    }
})

// GET Request: http://localhost:5001/coursesbyname/Java
app.get('/coursesbyname/:name', (req, res) => {
    const course = courses.find(c => c.name === req.params.name);
    if (!course) {
        res.status(404).send('The course with the given ID is not found.');
    } else {
        res.send(course);
    }
})

app.listen(5001, function () {
    console.log('The server is running at 5001!!')
})