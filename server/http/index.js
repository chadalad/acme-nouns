const chalk = require('chalk');
const express = require('express');
const { app, startServer } = require('./api/index');
const { Person, Place, Thing } = require('./db/index');
const path = require ('path');
const fs = require('fs');
const { composeMiddleware, standardMiddleware } = require('./middleware');


app.use(express.json());

// Hooks in all of our standard middleware.
composeMiddleware(app, standardMiddleware);

//path.join(__dirname, )

app.get('/', async (req, res, next) => {
  // await res.sendFile(path.join(__dirname, '../../dist'));
  res.send({message: "made it"});
});

// app.get('/chad', a)

app.get('/chad', async (req, res, next) => {
  // await res.sendFile(path.join(__dirname, '../../dist'));
  res.send({message: "made it"});
});

// app.post('/person', async (req, res) => {
//   const {}
// })



// Hooks in a router for the /api route.

// TODO: You could write anything between here and start server.

// // Promisifying starting the server - doesn't matter yet, but will when we get to databases so better to get used to.
// const startServer = (port, prod = false) => {
//   console.log(
//     `Application is running in ${prod ? 'production' : 'development'} mode.`
//   );

//   return new Promise((res) => {
//     app.listen(port, () => {
//       console.log(chalk.green(`Application is now listening on PORT:${port}`));
//       res();
//     });
//   });
// };

module.exports = startServer;
