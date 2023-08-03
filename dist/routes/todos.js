"use strict";
// import express from "express";
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        title: req.body.text,
    };
    todos.push(newTodo);
});
exports.default = router;
