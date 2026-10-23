const validationMiddleware = async(req,res)=>{

    const {title,name} = req.body ?? {};

    if(typeof title !== 'string' || !title.trim()){
        const err = new Error("Please enter a valid title")
        err.statusCode = 400;
        return next(err);
    }

    if(typeof name !== "string" || !name.trim()){
        const err = new Error("Please enter valid name");
        err.statusCode = 400;
        return next(next);
    }
next();
}

module.exports = validationMiddleware