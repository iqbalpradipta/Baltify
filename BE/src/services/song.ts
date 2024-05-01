import { Prisma, PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default new class Song {
    async insertSong(data: Prisma.SongCreateInput) {
        try {
            const insertSong = await prisma.song.create({
                data
            })

            return {
                data: insertSong,
                messages: 'Success insert song'
            }
        } catch (error) {
            throw error
        }
    }

    async getSong() {
        try {
            const getData = await prisma.song.findMany({
                cacheStrategy: { swr: 10, ttl: 60 },
            })

            return {
                data: getData,
                messages: 'Success insert song'
            }
        } catch (error) {
            throw error
        }
    }
}