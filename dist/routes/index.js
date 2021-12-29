"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/tasks", (req, res) => {
    res.send("get /tasks");
});
router.get("/tasks/:id", (req, res) => {
    res.send("get /tasks/:id");
});
router.post("/tasks", (req, res) => {
    res.send("post /tasks");
});
router.put("/tasks/:id", (req, res) => {
    res.send("put /tasks/:id");
});
router.delete("/tasks/:id", (req, res) => {
    res.send("delete /tasks/:id");
});
exports.default = router;
