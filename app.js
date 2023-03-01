const express = require('express');
const app = express();
const PORT = 3000;
const logger = (req, res, next) => {
    console.log("Logger executed");
    next();
};

app.get('/', (req, res)=>{
    console.log("Home Middleware");
    res.status(200).json({success: true});
});
app.use(logger);
app.get('/about', (req, res)=>{
    console.log("about middleware")
    res.send("About Page");
});
app.get('/help', (req, res)=>{
    console.log("help middleware")
    res.send("Help Page");
});
app.listen(PORT, ()=>{
console.log(`Server is listening in port ${PORT}`);
});