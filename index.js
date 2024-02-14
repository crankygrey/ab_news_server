import express, { json } from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';

const app = express();
const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

app.use(express.json());
app.use('/auth', authRoute);

async function main() {
    await mongoose.connect(URI).then(console.log('connected to database'));

    app.listen(port, console.log(`server listening on port ${port}`));
}

main().catch((err) => console.log(err));
