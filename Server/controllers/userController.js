const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const userData = req.body;

    const accessToken = await userService.register(userData);

    res.cookie("auth", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }).json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const userData = req.body;

    const accessToken = await userService.login(userData);

    res.cookie("auth", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }).json({ message: 'User logged in successfully' });
});

router.get('/logout', async (req, res) => res.clearCookie("auth"));


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