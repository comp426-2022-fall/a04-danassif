import minimist from "minimist";
import express from 'express';
import {roll} from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

var port = args.port;

if (port == null) {
    port = 5000;
}