const router = require('express').Router();
const mythService = require('../services/mythService');

router.get('/', async (req, res) => {
    const limit = Number(req.query.limit) || 0;
    const myths = await mythService.getMostPopular(limit);

    res.json(myths);
});

router.post('/create', async (req, res) => {
    const newMyth = req.body;
    console.log(req.body);
    //const userId = req.user;
    const myth = await mythService.create(newMyth);

    res.json(myth);
});

router.get('/all', async (req, res) => {
    const limit = Number(req.query.limit) || 0;
    const myths = await mythService.getAll(limit);

    res.json(myths);
});

router.get('/:mythId/details', async (req, res) => {
    const mythId = req.params.mythId;
    const myth = await mythService.getOneById(mythId);

    res.json(myth);
});

router.post('/:mythId/like', async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.userId;
    
    await mythService.likeMyth(mythId, userId);

    res.json({ message: "Successful in liking a myth" });
});

module.exports = router;