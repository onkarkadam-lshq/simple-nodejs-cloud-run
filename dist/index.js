import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const env = process.env.ENV || 'TEST';
  res.send(`Hello this is a test nodejs app for ${env}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});

process.on('SIGTERM', function () {
   console.log('helloworld: received SIGTERM, exiting gracefully');
   process.exit(0);
});
