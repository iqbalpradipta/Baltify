import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AuthService from '../services/auth'

export default new (class AuthController {
  RegisterUsers = async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const hashPassword = bcrypt.hashSync(data.password, 10);

      data.password = hashPassword;

      const response = await AuthService.RegisterService(data);

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  LoginUsers = async (req: Request, res: Response) => {
    try {
      const data = {
        password: req.body.password,
        email: req.body.email,
      };
      const response = await AuthService.LoginService(data as any);

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
})();
