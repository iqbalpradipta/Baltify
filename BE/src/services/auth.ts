import { Prisma, PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const RegisterService = async(data: Prisma.UserCreateInput) => {
    try {
        const usersData = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password
            }
        })

        return {
            data: usersData,
            messages: 'Suckeess register users'
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const LoginService = async(data: Prisma.UserCreateInput) => {
    try {

        const findMatchPswd = await prisma.user.findUnique({
            where: {
                email: data.email
            },
            select: {
                email: true,
                password: true,
                name: true
            }
        })

        if(!findMatchPswd) {
            return{
                messages: 'Email/Password is Wrong'
            }
        }

        const ComparePswd = bcrypt.compareSync(data.password, findMatchPswd?.password!)
        if(!ComparePswd) {
            return{
                messages: 'Email/Password is Wrong'
            }
        }

        const payload = {
            email: findMatchPswd.email,
            name: findMatchPswd.name,
        }

        const gimmeToken = jwt.sign({payload}, '4l4y', {expiresIn: '1h'})

        return {
            data: gimmeToken,
            messages: 'Login Success'
        }
    } catch (error) {
        throw error
    }
}