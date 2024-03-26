const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const userData = req.body;
    const accessToken = await userService.register(userData);
    const cookie = userService.decodeCookie(accessToken);
    const user = await userService.getUserFromCookie(cookie);

    res.cookie("auth", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }).json(user);
});

router.post('/login', async (req, res) => {
    const userData = req.body;
    const accessToken = await userService.login(userData);
    const cookie = userService.decodeCookie(accessToken);
    const user = await userService.getUserFromCookie(cookie);

    res.cookie("auth", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }).json(user);
});

router.post('/logout', async (req, res) => {

    res.clearCookie("auth").json({ message: 'User logged out successfully' });
});

router.get('/auth', async (req, res) => {
    const cookie = req.cookies.auth;
    const decodedCookie = userService.decodeCookie(cookie);

    const user = await userService.getUserFromCookie(decodedCookie);

    res.json(user);
});

module.exports = router;