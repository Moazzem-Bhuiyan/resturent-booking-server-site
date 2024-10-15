import itemContoler from "./item.controler.js";
import express from "express";

const router = express.Router();

router.post('/item', itemContoler.insertItemInfo )

router.get('/item/:id', itemContoler.getSignleItem )

router.get('/item', itemContoler.getAllItem )

router.delete('/item/:id', itemContoler.deleteSingleItem )

router.patch('/item/:id', itemContoler.updateSignleItem )



const itemRoutes = router

export default itemRoutes