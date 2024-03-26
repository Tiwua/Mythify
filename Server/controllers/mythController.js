const router = require('express').Router();
const mythService = require('../services/mythService');

router.get('/', async (req, res) => {
    const limit = Number(req.query.limit) || 0;
    const myths = await mythService.getMostPopular(limit);

    res.json(myths);
});

router.post('/create', async (req, res) => {
    const newMyth = req.body;
    const userId = req.body.ownerId;
    const myth = await mythService.create(userId, newMyth);

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

router.post('/:mythId/edit', async (req, res) => {
    const mythData = req.body;
    const userId = req.body.ownerId;
    
    await mythService.editMyth(mythData, userId);

    res.json({ message: "Successful in editing the myth" });
});

router.post('/:mythId/like', async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.userId;
    
    await mythService.likeMyth(mythId, userId);

    res.json({ message: "Successful in liking a myth" });
});

module.exports = router;