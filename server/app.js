import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import auth from 'basic-auth';

import * as db from './db/db';
import { serverPort } from '../etc/config.json';

// Initialization of express application
const app = express();

db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.post('/register', (req, res) => {
   db.createUser(req.body)
       .then(result => {
           res.send(result);
       })
       .catch(err => {
           res.status(401).send(err);
       });
});

app.get('/login', (req, res) => {
    let { name, pass } = auth(req);

    db.findByLogin(name)
        .then(user => {
            if(user.password !== pass) {
                res.status(401).end();
            } else {
                res.send(user);
            }
        }).catch(err => {
            res.status(404).end();
        });

});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});