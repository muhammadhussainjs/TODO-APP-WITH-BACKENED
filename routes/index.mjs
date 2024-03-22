import express from 'express'
import ads from './ads.mjs'
import users from './users.mjs'
import orders from './orders.mjs'
import products from './products.mjs'
const router = express.Router()

router.use('/ads' , ads)
router.use('/users' , users)
router.use('/orders' , orders)
router.use('/products' , products)

export default router