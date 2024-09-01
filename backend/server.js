const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const eventRoutes = require('./routes/event');


// Middleware
app.use('/api/events', eventRoutes);
app.use(cors());
app.use(express.json());

// MongoDB-Verbindung
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Beispiel-Route
app.get('/', (req, res) => {
    res.send('Backend läuft');
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
