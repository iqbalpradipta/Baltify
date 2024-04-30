import { Request, Response } from "express";
import { getUsersByIdServices, getUsersServices } from "../services/users";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await getUsersServices()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUsersById = async (req: Request, res: Response) => {
    try {
        const email = req.params.email

        const response = await getUsersByIdServices(email)


        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const updateUsers = async (req: Request, res: Response) => {

}

export const deleteUsers = async (req: Request, res: Response) => {

}