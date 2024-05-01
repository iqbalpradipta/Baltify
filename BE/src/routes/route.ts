import express from 'express'
import jwtAuth from '../middleware/jwtAuth'
import AuthController from '../controllers/auth'
import UserController from '../controllers/users'
import AlbumController from '../controllers/album'
import SongController from '../controllers/song'

const router = express.Router()

//users
router.get('/users', UserController.getUsers)
router.get('/users/:username', UserController.getUsersById)
router.put('/users/:username', UserController.updateUsers)
router.delete('/users/:username', UserController.deleteUsers)

//Album
router.get('/album', AlbumController.GetAlbum)
router.post('/album', AlbumController.InsertAlbum)
// router.get('/users/:username', UserController.getUsersById)
// router.put('/users/:username', UserController.updateUsers)
// router.delete('/users/:username', UserController.deleteUsers)

// Song
router.get('/song', SongController.GetSong)
router.post('/song', SongController.InsertSong)

// Auth
router.post('/register', AuthController.RegisterUsers)
router.post('/login', AuthController.LoginUsers)


export default router