const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/assets')))

// app.get('/', )

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

module.exports = app;