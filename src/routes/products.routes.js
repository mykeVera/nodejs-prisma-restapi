import { Router } from "express";
import { prisma } from '../db.js'

const router = Router();

router.get('/products', async (req, res) => {
    const products = await prisma.product.findMany()
    return res.json(products)
})

router.get('/product/:id', async (req, res) => {
    const productFound = await prisma.product.findFirst({
        where: {
            id: parseInt(req.params.id)
        },
        include: {
            category: true
        }
    })
    if (!productFound)
        return res.status(404).json({ error: "Product not found" });

    return res.json(productFound)
})

router.post('/product', async (req, res) => {
    const newProduct = await prisma.product.create({
        data: req.body
    })
    res.json(newProduct)
})

router.put('/product/:id', async (req, res) => {
    const productUpdated = await prisma.product.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    return res.json(productUpdated)
})

router.delete('/product/:id', async (req, res) => {
    const productDeleted = await prisma.product.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!productFound)
        return res.status(404).json({ error: "Product not found" });
    
    return res.json(productDeleted)
})

export default router;