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
        const job = await jobs.find((item)=>item.id === req.params.id)

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


const createJob = (req,res,next)=>{
    try{
        const {title,company,salary,location} = req.body || {};

        const job = {
            id: randomUUID,
            title,
            company,
            ...(location !== undefined ? {location} : {}),
            ...(salary !== undefined ? {salary} : {}),
        }

        return res.status(201).json({
            success:true,
            message:'Job created',
            data:job
        })

    }catch(error){
        next(error)
    }
};

const updateJob = async(req,res,next)=>{
    try{
        const {title,company,salary,location} = req.body || {};

        const job = await jobs.findOne((item)=>item.id === req.params.id);

        if(title !== undefined) job.title = title;
        if(company !== undefined) job.company = company;
        if(salary !== undefined) job.salary = salary;
        if(location !== undefined) job.location = location;

        return res.status(200).json({
            success:true,
            message:'Job updated',
            data:job
        })
            
        
    }catch(error){
        next(error)
    }
}


const deleteJob = async(req,res,next)=>{
    try{
        const job = await jobs.findIndex((item)=>item.id === req.params.id);

        if(index === -1){
            return res.status(404).json({
                success:false,
                message:'Job not found',
            })
        }

        job.splice(index, 1);

        return res.status(204).end();
    }catch(error){
        next(error)
    }
}


module.exports = {
    getJobs,
    getJobsById,
    createJob,
    updateJob,
    deleteJob,
}