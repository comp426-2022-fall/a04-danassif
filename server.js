import minimist from "minimist";
import express from 'express';
import {roll} from "../lib/roll.js";

const args = minimist(process.argv.slice(2));