const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const maxes = require('./controllers/maxes');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Dhksxor1!!!',
    database : 'four-walls'
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/signin', (req,res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.put('/maxes', (req, res) => { maxes.handleMaxes(req, res, db) })


app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})