const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Deck, Card } = require('../../db/models')

//get all decks
router.get('/:deckId', asyncHandler(async function (req, res) {
    console.log(req.params)
    console.log('HOLY SHEET')
    const { deckId } = req.params
    const cards = await Card.findAll({
        where: {
            deckId
        }

    })
    return res.json(cards);
}))

router.post('', asyncHandler(async (req, res) => {
    const { question, answer, deckId } = req.body;
    const card = await Card.create({
        question,
        answer,
        deckId
    })
    console.log(card, 'new card created')
    res.json({ card })
}))

module.exports = router;