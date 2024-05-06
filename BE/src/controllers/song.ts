import { Request, Response } from "express";
import SongService from "../services/song";

export default new (class SongController {
  InsertSong = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      data.Song = req.file?.filename

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
      const id = parseInt(req.params.id)
      const data = req.body
      data.AlbumId = parseInt(req.body.AlbumId)

      const response = await SongService.updateSong(id, data)

      res.status(200).json(response)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }

})();
