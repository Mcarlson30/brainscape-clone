const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Deck, Category } = require('../../db/models')

//get all decks
router.get('/:userId', asyncHandler(async function (req, res) {
    const { userId } = req.params
    const decks = await Deck.findAll({
        where: {
            userId: 0
        }
    })
    return res.json(decks);
}))

router.get('/user/:userId', asyncHandler(async (req, res) => {
    console.log('************', req.params)
    const { userId } = req.params
    console.log('*************', userId)
    const decks = await Deck.findAll({
        where: {
            userId
        }
    })
    return res.json(decks);
}))

router.post('', asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const deck = await Deck.create({
        userId,
        name
    })
    console.log(deck, 'new deck created')
    res.json({ deck })
}))

router.get('/category', asyncHandler(async function (req, res) {
    const categories = await Category.findall()
    return res.json(categories);
}))

module.exports = router;