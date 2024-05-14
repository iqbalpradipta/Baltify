import { Request, Response } from "express";
import SongService from "../services/song";
import Cloudinary from "../libs/cloudinary";
import { promisify } from "util";
import * as fs from "fs";

const deleteFile = promisify(fs.unlink);

export default new (class SongController {
  InsertSong = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      
      data.Song = res.locals.filename1
      const cloudinarySong = await Cloudinary.destination(res.locals.filename1);
      data.Song = cloudinarySong;
      console.log("data song", data.Song)
      await deleteFile(`../BE/src/upload/${res.locals.filename1}`);

      data.Image = res.locals.filename2
      const cloudinaryImage = await Cloudinary.destinationImage(res.locals.filename2);
      data.Image = cloudinaryImage;
      console.log("dataImage", data.Image)
      await deleteFile(`../BE/src/upload/${res.locals.filename2}`);
      const response = await SongService.insertSong(data);

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  GetSong = async (req: Request, res: Response) => {
    try {
      const response = await SongService.getSong();

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  async UpdateSong(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      data.AlbumId = parseInt(req.body.AlbumId);

      const response = await SongService.updateSong(id, data);

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
})();
