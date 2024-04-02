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
    console.log(user);

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
    
    try {
        if(cookie == null) {
            return res.status(401).send("Unauthorized access");
        }
        
        const decodedCookie = userService.decodeCookie(cookie);
        const user = await userService.getUserFromCookie(decodedCookie);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }

});

module.exports = router;