import { Request, Response } from "express";

export class UserController {
  async sendWhatever(req: Request, res: Response) {
    res.status(200).send();
  }
}
