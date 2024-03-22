const router = require('express').Router();
const mythService = require('../services/mythService');

router.get('/', async (req, res) => {
    const myths = await mythService.getAll();

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

module.exports = router;