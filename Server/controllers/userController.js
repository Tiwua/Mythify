const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const userData = req.body;
    console.log(userData);

    const {userId, email, token} = await userService.register(userData);

    res.json({
        _id: userId,
        email: email,
        accessToken: token
    });
});

module.exports = router;