const jobs = [];

const find = async (filters = {}) => jobs.filter((job) =>
    Object.entries(filters).every(([key, value]) => job[key] === value)
);

const findById = async (id) => jobs.find((job) => job.id === id) || null;

module.exports = {
    find,
    findById,
};