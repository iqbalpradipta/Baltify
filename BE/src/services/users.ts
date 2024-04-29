import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUsersServices = async() => {
    try {
        const data = await prisma.user.findMany()

        return {
            data,
            messages: 'success get data brother'
        }
    } catch (error) {
        throw error
    }
}

export const getUsersById = () => {

}

export const insertUsers = async(data: any) => {
    try {
        const usersData = await prisma.user.create({data})

        return {
            data,
            messages: 'Suckeess create users'
        }
    } catch (error) {
        throw error
    }
}

export const updateUsers = () => {

}

export const deleteUsers = () => {

}