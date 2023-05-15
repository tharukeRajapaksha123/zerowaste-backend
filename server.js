require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collectorRoutes = require('./routes/collectorRoutes');
const workAssignmentsController = require('./routes/workAssignmentRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

app.use('/api', collectorRoutes);
app.use('/api', workAssignmentsController);
app.use('/api', clientRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
