"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.log('hello');
//const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'token for response: 001'
    });
    // res.json(
    //   {
    //       ok: "okokok"
    //   }
    // )
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
