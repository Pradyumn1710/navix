import express from 'express';
import cors from 'cors'; // Import the cors package
import writeData from "./write.js";

const app = express();

app.use(cors()); // Use the cors middleware
app.use(express.json());

app.post('/writedata', async (req, res) => {
    try {
        const { points } = req.body;
        await writeData(points);
        res.status(200).json({ message: 'Data has been written successfully.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while writing data.' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});