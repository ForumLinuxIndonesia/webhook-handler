import axios from 'axios';
import express from 'express';

const app = express();

app.post('*', (req, res) => {
  res.sendStatus(200);
  console.log('New Trigger to', req.url)
  axios.post(`http://host.docker.internal:${process.env.HOST_PORT}` + req.url)
    .then(res => {
      console.log('Success to redeploy')
      console.log(res.data)
    })
    .catch(err => {
      console.warn('Failed to redeploy');
      console.warn(err.response.data)
    });
})

app.listen(Number(process.env.LISTEN_PORT) || 3000, () => console.log(`Proxy ready on port ${process.env.LISTEN_PORT || 3000}`));
