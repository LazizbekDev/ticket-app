import express from "express";
import { config } from "dotenv";
import userRoute from "./routes/userRoute.js";

const app = express();
config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('okay')
})

app.use('/api/users', userRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server - PORT : ${PORT}`);
})