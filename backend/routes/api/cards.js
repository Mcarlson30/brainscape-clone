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

module.exports = router;