import express from "express";
import mongoose from "mongoose";

import { createServer } from "node:http";
import { Server } from "socket.io";

import cors from "cors";


const app = express();
app.get("/home", (req, res) => {
    res.json({ "message": "Hello World!" });
});

const startServer = async () => {
    app.listen(8000, () => {
        console.log("Listen on post 8000");
    });
}
startServer();