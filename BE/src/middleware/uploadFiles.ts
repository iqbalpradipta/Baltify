import { NextFunction, Request, Response } from 'express';
import multer from 'multer';

export default new class UploadFiles {
  Upload(fieldName: string, fieldName2: string) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '../BE/src/upload/');
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
      }
    });
    
    const upload = multer({ storage: storage });

    return (req: Request, res: Response, next: NextFunction) => {
      upload.fields([
        { name: fieldName, maxCount: 1 },
        { name: fieldName2, maxCount: 1 }
      ])(req, res, (err) => {
        if (err) return res.status(400).json({ messages: 'Error when upload!' });

        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        res.locals.filename1 = files[fieldName]?.[0]?.filename ?? null;
        res.locals.filename2 = files[fieldName2]?.[0]?.filename ?? null;
        next();
      });
    };
  }

  UploadSingle(fieldName: string) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '../BE/src/upload/');
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
      }
    });
    
    const upload = multer({ storage: storage });

    return (req: Request, res: Response, next: NextFunction) => {
      upload.single(fieldName)(req, res, (err) => {
        if (err) return res.status(400).json({ messages: 'Error when upload!' });

        res.locals.filename = req.file?.filename
        next();
      });
    };
  }


};
