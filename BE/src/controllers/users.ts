import { Request, Response } from "express";
import UserService from "../services/users";
import bcrypt from "bcrypt";

export default new (class UserController {
  getUsers = async (req: Request, res: Response) => {
    try {
      const response = await UserService.getUsersServices();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getUsersById = async (req: Request, res: Response) => {
    try {
      const username = req.params.username;

      const response = await UserService.getUsersByIdServices(username);

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  updateUsers = async (req: Request, res: Response) => {
    try {
      const username = req.params.username;

      const data = {
        email: req.body.email,
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
      };

      const hashPassword = bcrypt.hashSync(data.password, 10);

      data.password = hashPassword;

      const response = await UserService.updateUser(data, username);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  deleteUsers = async (req: Request, res: Response) => {
    try {
      const username = req.params.username;

      const response = await UserService.DeleteUser(username);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  };
})();
