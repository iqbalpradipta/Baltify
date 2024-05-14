import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AlbumService from "../services/album";

export default new (class AlbumController {
  InsertAlbum = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      data.image = req.file?.filename

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
