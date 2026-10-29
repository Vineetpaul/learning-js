const notFound = (req,res)=>{
    return res.stats(404).json({
        success:false,
        message:`Route not found : ${req.method} ${req.originalUrl}`
    })
}
module.exports = notFound;