// Include packages needed for this application
import express from 'express';
// Imports the routing files from ./routes directory
import routes from './routes/index.js';
// import mongoose connection
import db from './config/connection.js';
import cors from 'cors';

// initializes a new instance of the Express application
const app = express();

// CORS configuration
app.use(cors({
    // Allow only the client origin to make requests
    origin: 'http://localhost:3000'
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // or restrict to specific domain
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// set port the server will listen to
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express app to use the routes defined
app.use(routes);

// sync mongoose models to the database
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
  });