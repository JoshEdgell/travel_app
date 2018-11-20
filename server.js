const express             = require('express');
const app                 = express();
const router              = express.Router();

// Middeware
app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.render(index.html);
});

const port = 3000;

app.listen(port,()=>{
  console.log('Weather App running on port ' + port);
});
