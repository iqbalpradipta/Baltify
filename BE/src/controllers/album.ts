import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AlbumService from "../services/album";
import cloudinary from "../libs/cloudinary";
import { promisify } from "util";
import * as fs from "fs";

const deleteFile = promisify(fs.unlink);

export default new (class AlbumController {
  InsertAlbum = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      data.image = res.locals.filename
      const cloudinaryImage = await cloudinary.destinationImage(res.locals.filename);
      data.image = cloudinaryImage;
      await deleteFile(`../BE/src/upload/${res.locals.filename}`);

      const response = await AlbumService.InsertAlbum(data);

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  GetAlbum = async (req: Request, res: Response) => {
    try {
      const response = await AlbumService.GetAlbum();

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
})();
