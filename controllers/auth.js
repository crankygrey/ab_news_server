import User from '../models/User.js';

export const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = new User({ username, password });
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                status: 'failed',
                data: [],
                message:
                    'It seems you already have an account, please log in instead.',
            });
        }
        const newUser = await user.save();
        console.log(newUser);
        res.status(200).json({
            status: 'success',
            data: [],
            message: 'Your account has been successfully created.',
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            code: 500,
            data: [],
            message: 'Internal Server Error',
        });
    }
    res.end();
};
