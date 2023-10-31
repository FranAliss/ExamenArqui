import express from "express";
import { UserController } from "./controller";

const userRouter = express.Router();

userRouter.post("/:id", UserController.sendWhatever.bind());

export { userRouter };
