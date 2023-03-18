const { Router } = require("express");
const postController = require("../controller/postController");
const authMiddleware = require("../middleware/authmiddleware");

const postRoute = Router();


postRoute.post("/createpost",authMiddleware,postController);




module.exports = postRoute