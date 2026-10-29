const express = require('express');

const {
     getJobs,
    getJobsById,
    createJob,
    updateJob,
    deleteJob,
} = require('../controller/jobController');

const validate = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/',getJobs);
router.get('/:id',getJobsById);
router.post('/',validate,createJob);
router.patch('/:id',validate,updateJob);
router.delete('/:id',deleteJob);

module.exports = router;