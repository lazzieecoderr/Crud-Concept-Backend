import express from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../Controllers/UserController.js';



const router = express.Router();


router.get("/get-user",getUsers)
router.post("/create-user",createUser)
router.put("/update-user/:id",updateUser)
router.delete("/delete-user/:id",deleteUser)


export default router;
