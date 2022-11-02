import { Request, Response } from "express";
import Business from "../business/Bussiness";

class Controller {
  constructor(private business: Business) {}

  public news = async (req: Request, res: Response) => {
    try {
      const inputBody = req.body;
      const inputQuery = req.query;

      const response = await this.business.news(inputBody, inputQuery);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };
}
export default Controller;
