const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const app = express();

app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
