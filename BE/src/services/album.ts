import { Prisma, PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default new (class Song {
  async InsertAlbum(data: Prisma.AlbumCreateInput) {
    try {
      const insertAlbum = await prisma.album.create({
        data,
      });

      return {
        data: insertAlbum,
        messages: "Success insert song",
      };
    } catch (error) {
      throw error;
    }
  }

  async GetAlbum() {
    try {
      const GetAlbum = await prisma.album.findMany({
        cacheStrategy: { swr: 10, ttl: 60 },
        include: {
            Song: true,
          },
      });

      return {
        data: GetAlbum,
        messages: "Success insert song",
      };
    } catch (error) {
      throw error;
    }
  }
})();
