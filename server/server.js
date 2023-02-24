import express from "express";
import { config } from "dotenv";
import userRoute from "./routes/userRoute.js";
import ticketRoute from "./routes/ticketRoute.js";
import {errorHandler} from "./middleware/errorMiddleware.js";
import "colors"
import connect from "./config/db.js"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();
connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/api/users', userRoute)
app.use('/api/tickets', ticketRoute)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('_')
    })
}

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server - PORT : ${PORT}`);
})