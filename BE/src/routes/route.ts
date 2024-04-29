import express from 'express'
import {getUsers, insertUsers, updateUsers, deleteUsers, getUsersById} from '../controllers/users'

const router = express.Router()

//users
router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', insertUsers)
router.put('/users/:id', updateUsers)
router.delete('/users/:id', deleteUsers)


export default router