import express from 'express';
import musicRoutes from './routes/music.routes.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/music', musicRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
})