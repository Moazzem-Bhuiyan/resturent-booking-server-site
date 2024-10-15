import express from "express";
import userControler from "./user.controler.js";

const router = express.Router();

router.post("/user", userControler.insertUserinfo);

router.post("/user/login", userControler.logedinuser);

router.get("/user/:id", userControler.getSingleUser);

router.get("/user", userControler.getAllUser);

router.patch('/user/:id',userControler.updateSingleUser)

router.delete("/user/:id",userControler.deleteSignleUser)



const userRoutes = router;



export default userRoutes;
