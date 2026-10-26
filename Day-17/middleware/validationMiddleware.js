const validationMiddleware = async (req, res, next) => {
    try {
        const body = req.body;

        // validate body if it is object, not an array and not empty
        if (!body || typeof body !== 'object' || Array.isArray(body)) {
            const err = new Error('Body must be an object');
            err.statusCode = 400;
            return next(err)
        }


        // supporting only allowed fields

        const allowedFields = ['title', 'company', 'salary', 'location']

        const unRelatedField = Object.keys(body).filter(
            (field) => !allowedFields.includes(field)
        )

        if (unRelatedField.length > 0) {
            const err = new Error(`unsupported field ${unRelatedField[0]}`)
            err.statusCode = 400;
            return next(err)
        }


        // validate post req for title and company

        if (req.method === 'POST') {
            if (!body.title || typeof body.title !== 'string' || !body.title.trim()) {
                const err = new Error('Provide valide title')
                err.statusCode = 400;
                return next(err)
            }

            if (!body.company || typeof body.company !== 'string' || !body.company.trim()) {
                const err = new Error('Provide valide company')
                err.statusCode = 400;
                return next(err)
            }
        }


        // validate patch req for update , at least one field needed to be updated
        if(req.method === 'PATCH' && Object.keys(body).length === 0){
            const err = new Error('Provide at least one field to update')
                err.statusCode = 400;
                return next(err)
        }


        // validate field if they are string or not
        for(let field of ['title', 'company', 'salary', 'location']){
            if(field in body && body[field] !== 'string' || !body[field].trim()){
                  const err = new Error('field must be string')
                err.statusCode = 400;
                return next(err)
            }
        }
    }catch(err){
        next(err)
    }
    next();

}

module.exports = validationMiddleware;