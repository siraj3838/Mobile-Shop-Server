const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;




app.use(cors());
app.use(express.json());






app.get('/', (req, res) => {
    res.send('Mobile Shop Server Running');
})
app.listen(port, () => {
    console.log(`Mobile Shop Running From ${port}`);
})