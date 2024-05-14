import express from 'express';
import cors from 'cors'
import router from './routes/route';
import 'dotenv/config';
import cloudinary from './libs/cloudinary';

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
cloudinary.config();

app.use('/api/v1/', router);

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port} `)
})