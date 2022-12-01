#!/usr/bin/env node

import minimist from "minimist";
import express from 'express';
import {roll} from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
var port = args.port;
const app = express();

app.use(express.urlencoded({extended: true}));

// Make sure port isn't null
if (port == null) {
    port = 5000;
}

// Check endpoint at app that returns 200 OK
app.get('/app/', (req, res) => {
    res.send('200 OK');
});

// Endpoint returns JSON for a default roll of two six-sided dice 
app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1));
});

// endpoint accept JSON or URLEncoded
app.post('/app/roll/', (req, res) => {
	res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
});

// Default rolls and dice, side passed in
app.get('/app/roll/:sides/', (req, res) =>{
    res.send(roll(parseInt(req.params.sides), 2, 1));
});

// Default rolls, dice and side passed in
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
});

// No defaults, pass in all values
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
});

// Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined
app.get('*', (req, res) => {
    res.send("404 NOT FOUND");
});

// Listening at the port
app.listen(port);