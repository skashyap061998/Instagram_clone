const { Router } = require("express");
const commentController = require("../controller/commentController");
const authMiddleware = require("../middleware/authmiddleware");

const commentRoute = Router();


commentRoute.post("/createcomment",authMiddleware,commentController);




module.exports = commentRoute