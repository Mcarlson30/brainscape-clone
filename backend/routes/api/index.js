// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const decksRouter = require('./deck.js')
const cardsRouter = require('./cards.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/decks', decksRouter);
router.use('/cards', cardsRouter);

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});



module.exports = router;