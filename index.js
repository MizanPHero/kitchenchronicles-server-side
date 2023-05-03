const express = require('express');
const app = express();
const cors=require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json')

app.use(cors())


app.get('/', (req, res) => {
    res.send('API Server is running')
});




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})