const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async (req, res) => {
    const userData = req.body;

    const accessToken = await userService.register(userData);
    

    res.cookie("auth", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }).json({ message: 'User registered successfully', userId:`${ accessToken.userId }` });
});

router.post('/login', async (req, res) => {
    const userData = req.body;
    const {email} = userData;
    const accessToken = await userService.login(userData);
    res.cookie("auth", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }).json({ message: 'User logged in successfully', id: (await (userService.getUserId(email))).toString()});
});

router.post('/logout', async (req, res) => {

    res.clearCookie("auth").json({ message: 'User logged out successfully' });
});



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