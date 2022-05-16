const express = require("express");
const app = express();
//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./route/routes");

// security intailizing 
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });


// get database from mongoDB Server 
require("./database/connection")
const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
);