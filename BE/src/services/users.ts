import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default new (class UsersService {
  getUsersServices = async () => {
    try {
      const data = await prisma.user.findMany({
        cacheStrategy: { swr: 10, ttl: 60 },
      });

      return {
        data,
        messages: "success get User brother",
      };
    } catch (error) {
      throw error;
    }
  };

  getUsersByIdServices = async (username: string) => {
    try {
      const data = await prisma.user.findUnique({
        where: {
            username: username,
        },
        cacheStrategy: { swr: 10, ttl: 60 },
      });

      return {
        data,
        messages: "success get User by id",
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  async updateUser(data: any, username: string) {
    try {
        const updated = await prisma.user.update({
            where: {
                username
            },
            data: {
                name: data.name,
                username: data.name,
                password: data.password,
                email: data.email
            }
        })

        return {
            data: updated,
            messages: 'success update User'
        }
    } catch (error) {
        throw error
    }
  };

  async DeleteUser(username: string) {
    try {
        await prisma.user.delete({
            where: {
                username: username as string
            }
        })
        return {
            messages: `Success delete User ${username}`
        }
    } catch (error) {
        throw error
    }
  };
})();
