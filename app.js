import { PORT } from "./src/utils/environement.js";
import bodyParser from "body-parser";
import router from "./src/router.js";
import { createServer } from 'http';
import { Server } from 'socket.io';


import express from "express";

const app = express();

const httpServer = createServer(app);

export const io = new Server(httpServer, { cors: { origin: '*' }});
io.on('connection', (client) => {
    console.log("Connected!")
});



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);
app.use('/public', express.static('public'));

httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});









