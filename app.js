const express=require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controller/controller')

dotenv.config();

app.use(cors())
app.use(express.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.get('/api/users', controller.ListesUsers);
app.get('/api/users/:id', controller.unUtilisateur);
app.post('/api/users', controller.validation, controller.ajouterUser);


app.listen(process.env.PORT,function(){
  console.log(`Le serveur ecoute sur le port ${process.env.PORT}`);
  console.log(`Host:${process.env.DB_HOSTNAME}`);
  console.log(`User:${process.env.DB_USER}`);
  console.log(`Password:${process.env.DB_PASSWORD}`);
  console.log(`Database:${process.env.DB_NAME}`);                              
})

