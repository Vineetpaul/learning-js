const Job = require('../model/job.js');

const getJobs = async (req, res, next) => {
    try {
        const { title, company, salary } = req.query;
        const filters = {};

        for (const [name, value] of Object.entries({ title, company, salary })) {
            if (value !== undefined && (typeof value !== 'string' || !value.trim())) {
                const err = new Error(`Enter a valid ${name}`);
                err.statusCode = 400;
                return next(err);
            }
        }

        if (title !== undefined) {
            filters.title = title.trim();
        }
        if (company !== undefined) {
            filters.company = company.trim();
        }
        if (salary !== undefined) {
            const parsedSalary = Number(salary);
            if (!Number.isFinite(parsedSalary)) {
                const err = new Error('Enter a valid salary');
                err.statusCode = 400;
                return next(err);
            }
            filters.salary = parsedSalary;
        }

        const jobs = await Job.find(filters);

        return res.status(200).json({
            success: true,
            message: 'Here are the jobs',
            jobs,
        });
    } catch (err) {
        return next(err);
    }
};

const getJobById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const job = await Job.findById(id);

        if (!job) {
            const err = new Error('Job not found');
            err.statusCode = 404;
            return next(err);
        }

        return res.status(200).json({
            success: true,
            message: 'Here is your job',
            job,
        });
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    getJobs,
    getJobById
};