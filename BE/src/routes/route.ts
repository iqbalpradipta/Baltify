import express from 'express'
import {getUsers, updateUsers, deleteUsers, getUsersById} from '../controllers/users'
import { LoginUsers, RegisterUsers } from '../controllers/auth'

const router = express.Router()

//users
router.get('/users', getUsers)
router.get('/users/:email', getUsersById)
router.put('/users/:email', updateUsers)
router.delete('/users/:email', deleteUsers)

// Auth
router.post('/register', RegisterUsers)
router.post('/login', LoginUsers)


export default router