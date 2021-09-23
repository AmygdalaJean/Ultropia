require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
const ultropiaRouter = require('./routes/ultropiaRouter')
app.use('/ultropia', ultropiaRouter)


const PORT = process.env.PORT || 3001;

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
