const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successsfully started the server on PORT : ${ServerConfig.PORT}`);

} )
