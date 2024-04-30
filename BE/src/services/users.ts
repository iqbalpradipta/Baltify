import { Prisma, PrismaClient } from "@prisma/client"

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

export const getUsersByIdServices = async (email: string) => {
    try {
        const data = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        return {
            data,
            messages: 'success get data by id'
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const updateUsers = () => {

}

export const deleteUsers = () => {

}