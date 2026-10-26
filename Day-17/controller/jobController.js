const {randomUUID} = require('crypto');

const jobs = require('../Data/data');

const getJobs = (req,res)=>{
    return res.status(200).json({
        success:true,
        message:'here is your job',
        data:jobs
    })
}

const getJobsById = async(req,res,next)=>{
    try{
        const job = jobs.find((item)=>item.id === req.params.id)

        if(!job){
            return res.status(404).json({
                success:false,
                message:'Job not found'
            })
        }

        return res.status(200).json({
            success:true,
            data:job
        })
    }catch(err){
        next(err)
    }
}


const 

