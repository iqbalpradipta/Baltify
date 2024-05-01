import { Prisma, PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient().$extends(withAccelerate());

export default new (class AuthServices {
  async RegisterService(data: Prisma.UserCreateInput) {
    try {
      const usersData = await prisma.user.create({
        data: {
          email: data.email,
          username: data.username,
          name: data.name,
          password: data.password,
        },
      });

      return {
        data: usersData,
        messages: "Suckeess register users",
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async LoginService(data: Prisma.UserCreateInput) {
    try {
      const findMatchPswd = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
        select: {
          email: true,
          username: true,
          password: true,
          name: true,
        },
        cacheStrategy: { swr: 10, ttl: 10 },
      });

      if (!findMatchPswd) {
        return {
          messages: "Email/Password is Wrong",
        };
      }

      const ComparePswd = bcrypt.compareSync(
        data.password,
        findMatchPswd?.password!
      );
      if (!ComparePswd) {
        return {
          messages: "Email/Password is Wrong",
        };
      }

      const payload = {
        email: findMatchPswd.email,
        name: findMatchPswd.name,
        username: findMatchPswd.username
      };

      const gimmeToken = jwt.sign(
        { payload },
        process.env.SECRET_KEY as string,
        { expiresIn: "24h" }
      );

      return {
        data: gimmeToken,
        messages: "Login Success",
      };
    } catch (error) {
      throw error;
    }
  }
})();
