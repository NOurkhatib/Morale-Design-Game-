const express = require('express');
const app = express();
const argumentController = require('./controllers/argumentController'); // Import the argument controller

app.use(express.json());

app.post('/api/arguments', argumentController.createArgument);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});