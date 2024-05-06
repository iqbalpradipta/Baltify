import { NextFunction, Request, Response } from 'express'
import multer from 'multer'
export default new class UploadFiles {
  Upload(fieldName: string) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '../BE/src/upload/')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
      }
    })
    
    const upload = multer({ storage: storage })

    return (req: Request, res: Response, next: NextFunction) => {
      upload.single(fieldName)(req, res, (err) => {
        if (err) return res.status(400).json({ messages: 'Error when upload !' });

        if (req.file) {
          res.locals.filename = req.file.filename;
        }
        next();
      })
    }
  }
}