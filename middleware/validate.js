import { validationResult } from 'express-validator';

export default (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(422).send({ errors: result.array() });
        return res.end();
    }
    next();
};
