// const express = require('express');
import express from 'express';
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello World!");
})


app.listen(4000); 