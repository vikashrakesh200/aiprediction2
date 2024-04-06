const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routes.js");
const app = express();

const port = process.env.PORT || 4000;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(router);
app.use('/assest', express.static('assest'));
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

