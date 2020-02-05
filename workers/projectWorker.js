const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getProjectsById,
    getTasks,
    getTasksByProjectId,
    getResources,
    getResourcesByProjectId,
    insertResource,
    insertProject,
    insertTask
}

function getProjects() {
    return db('Projects')
}

function getProjectsById(id) {
    return db('Projects')
        .where('project_id', id)
        .first()
}

function getTasks() {
    return db('Tasks')
        .join('Projects', 'Tasks.project_id', 'Projects.project_id')
        .select('Tasks.*', 'project_name', 'project_description')
}

function getTasksByProjectId(id) {
    return db('Tasks')
        .where('project_id', id);
}

function getResources() {
    return db('Resources')
}

function getResourcesByProjectId(id) {
    return db('Projects_Resources')
        .join('Resources', 'Projects_Resources.resource_id', 'Resources.resource_id')
        .select('project_id', 'resource_name', 'resource_description')
        .where('project_id', id);
}

function insertResource(resource) {
    return db('Resources')
        .insert(resource)
}

function insertProject(project) {
    return db('Projects')
        .insert(project)
}

function insertTask(task) {
    return db('Tasks')
        .insert(task)
}