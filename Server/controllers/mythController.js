const router = require('express').Router();
const mythService = require('../services/mythService');

router.get('/', async (req, res) => {
    const limit = Number(req.query.limit) || 0;
    const myths = await mythService.getMostPopular(limit);

    res.json(myths);
});

router.post('/create', async (req, res) => {
    try {
        const newMyth = req.body;
        const userId = req.body.ownerId;
        if (!userId) {
            res.status(401).send("Unauthorized access");
        }

        const myth = await mythService.create(userId, newMyth);
        res.json(myth);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
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

router.post('/:mythId/dislike', async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.body.userId;
    await mythService.dislike(mythId, userId);

    res.json({ message: "Successful in disliking a myth" });
});

router.get('/:mythId/likes-count', async (req, res) => {
    const mythId = req.params.mythId;
    const myth = await mythService.likesCount(mythId);

    res.json(myth.favoriteList.length);
});

router.post('/:mythId/delete', async (req, res) => {
    const mythId = req.params.mythId;
    await mythService.delete(mythId);

    res.json({ message: "Myth deleted" });
});

router.get('/latest', async (req, res) => {
    const myths = await mythService.getLatest();

    res.json(myths);
});

module.exports = router;