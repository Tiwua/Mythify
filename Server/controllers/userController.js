const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const userData = req.body;

    const result = await userService.register(userData);
    console.log(result);

    res.json(result);
});

router.post('/login', async (req, res) => {
    const userData = req.body;

    const result = await userService.login(userData);

    res.json(result);
});

router.get('/logout', async (req, res) => res.json({ok: true}));


// router.post('/all', async (req, res) => {
//     const {userId, email} = await userService.getAll();

//     console.log(userId, email);

//     res.json({
//         _id: userId,
//         email: email,
//         accessToken
//     });
// });

module.exports = router;