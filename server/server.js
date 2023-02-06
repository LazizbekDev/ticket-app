import express from "express";
import { config } from "dotenv";
import userRoute from "./routes/userRoute.js";
import {errorHandler} from "./middleware/errorMiddleware.js";
import "colors"
import connect from "./config/db.js"

config();
connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('okay')
})

app.use('/api/users', userRoute)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server - PORT : ${PORT}`);
})