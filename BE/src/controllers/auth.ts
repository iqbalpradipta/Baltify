import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { LoginService, RegisterService } from "../services/auth";


export const RegisterUsers = async (req: Request, res: Response) => {
    try {
        const data = req.body

        const hashPassword = bcrypt.hashSync(data.password, 10)

        data.password = hashPassword

        const response = await RegisterService(data)

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const LoginUsers = async (req: Request, res: Response) => {
    try {
        const data = {
            password: req.body.password,
            email: req.body.email,
        }
        const response = await LoginService(data)

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}