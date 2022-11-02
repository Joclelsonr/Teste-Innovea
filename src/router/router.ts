import { Router } from "express";
import Business from "../business/Bussiness";
import Controller from "../controller/Controller";

const newsRouter = Router();
const controller = new Controller(new Business());

newsRouter.get("/", controller.news);

export default newsRouter;
