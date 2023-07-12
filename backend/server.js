const express = require('express');
const dbConnect = require('./database/index');
const {port} = require('./config/index');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require ('cors');

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000"],
};

const app = express();

app. use(cookieParser());

app.use(cors(corsOptions));

app.use(express.json({limit:'50mb'}));

app.use(router);


dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!123')
})

app.use('/storage', express.static('storage'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend app listening on port number ${port}`)
})