import { Prisma, PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default new (class Song {
  async insertSong(data: Prisma.SongCreateInput) {
    try {
      const insertSong = await prisma.song.create({
        data,
      });

      return {
        data: insertSong,
        messages: "Success insert song",
      };
    } catch (error) {
      throw error;
    }
  }

  async getSong() {
    try {
      const getData = await prisma.song.findMany({
        select: {
          id: true,
          tittle: true,
          Artist: true,
          Song: true,
          Album: true,
        },
        cacheStrategy: { swr: 10, ttl: 60 },
      });

      return {
        data: getData,
        messages: "Success get song",
      };
    } catch (error) {
      throw error;
    }
  }

  async updateSong(id: number, data: any) {
    try {
      const updateSong = await prisma.song.update({
        where: {
          id,
        },
        data: {
          AlbumId: data.AlbumId,
        },
      });

      return {
        data: updateSong,
        messages: "success update data",
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
})();
