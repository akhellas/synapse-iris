const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use('/documents', express.static('./build'));

app.use('/documents-inbox', (req, res) => {
    res.send(renderBuy());
  });

  app.listen(3001);

  console.log(`documents team running. fragments are available here:
  >> http://127.0.0.1:3001/documents-inbox
  >> http://127.0.0.1:3001/documents-outbox`);
