const express = require('express');
const app = express();
const port = 3000;

// Middleware
const swaggerJSON = require('./swagger.json');
const swaggerUI = require('swagger-ui-express');


app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));



app.listen(port, () => {
    console.log(`App runnning at http://localhost:${port}`);
})