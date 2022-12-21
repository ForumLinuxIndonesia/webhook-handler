import axios from 'axios';
import express from 'express';

const app = express();

app.post('*', (req, res) => {
  res.sendStatus(200);
  try {
    console.log('New Trigger to', req.url)
    axios.post('http://host.docker.internal:9000' + req.url);
  } catch (error) {
    console.warn(error);
  }
})

app.listen(80, () => console.log('Proxy ready on port 80'));
