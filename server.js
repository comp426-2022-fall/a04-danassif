import minimist from "minimist";
import express from 'express';
import {roll} from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

var port = args.port;

if (port == null) {
    port = 5000;
}

// Check endpoint at /app/ that returns 200 OK.
app.get('/app/', (req, res) => {
    res.send('200 OK');
});

// Endpoint /app/roll/ that returns JSON for a default roll of two six-sided dice one time. Example output might look like: {"sides":6,"dice":2,"rolls":1,"results":[12]}.
app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1));
});










// Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined
app.get('*', (req, res) => {
    res.send("404 NOT FOUND");
});