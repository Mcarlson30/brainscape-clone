const { Deck } = require("../db/models");

const getDeck = async (deckId) => {
    const deck = await Deck.findOne({
        where: {
            id: deckId,
        },
    });
    return deck;
};

module.exports = { getDeck };