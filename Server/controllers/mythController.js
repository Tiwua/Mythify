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
    console.log(userId);
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
    const mythId = req.body.mythId;
    await mythService.edit(mythId, mythData);
    res.json({ message: "Successful in editing the myth" });
});

router.post('/:mythId/like', async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.body.userId;
    await mythService.like(mythId, userId);

    res.json({ message: "Successful in liking a myth" });
});

router.post('/:mythId/delete', async (req, res) => {
    const mythId = req.params.mythId;
    console.log(mythId);
    await mythService.delete(mythId);

    res.json({ message: "Myth deleted" });
});

router.get('/latest', async (req, res) => {
    const myths = await mythService.getLatest();

    res.json(myths);
});

module.exports = router;