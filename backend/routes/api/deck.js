const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Deck, Category } = require('../../db/models')

//get all decks
router.get('', asyncHandler(async function (req, res) {
    const decks = await Deck.findAll(
    )
    return res.json(decks);
}))

router.get('/user', asyncHandler(async (req, res) => {
    const { user } = req.body;
    console.log(req.body)
    const decks = await Deck.findAll({
        where: {
            userId: user.id
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