const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Deck } = require('../../db/models')

//get all decks
router.get('', asyncHandler(async function (req, res) {
    const decks = await Deck.findAll()
    return res.json(decks);
}))

module.exports = router;