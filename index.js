const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://mongo:LcgvgmYlxffdNlsBvtGWoJZXvoehByrc@mongodb.railway.internal:27017'; // Replace with your MongoDB URI

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




const Asignatura = require('./models/Asignatura');

app.get('/api/asignaturas', async (req, res) => {
    try {
        const asignaturas = await Item.find();
        res.json(asignaturas);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/asignaturas', async (req, res) => {
    const newAsignatura = new Asignatura(req.body);
    try {
        const savedAsignatura = await newAsignatura.save();
        res.json(savedAsignatura);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});