const express = require('express');
const db = require('../workers/projectWorker.js');

const server = express();
server.use(express.json());

server.get('/projects', (req, res) => {
    db.getProjects()
    .then(projects => {
        const refrac = projects.map(project => {
            return {
                ...project,
                project_completed: project.project_completed === 0 ? false : true
            }
        })
        res.send(refrac);
    });
});

server.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    db.getProjectsById(id)
    .then(project => {
        const dataProject = {
            ...project,
            project_completed: project.project_completed === 0 ? false : true
        }
        db.getTasksByProjectId(id)
        .then(taskArr => {
            const tasks = taskArr.map(task => {
                return {
                    ...task,
                    task_completed: task.task_completed === 0 ? false : true
                }
            });
            db.getResourcesByProjectId(id)
            .then(resources => res.send({
                ...dataProject,
                tasks: tasks,
                resources: resources
            }))
        })
    });
})

server.get('/tasks', (req, res) => {
    db.getTasks()
    .then(tasks => {
        const refrac = tasks.map(task => {
            return {
                ...task,
                task_completed: task.task_completed === 0 ? false : true
            }
        })
        res.send(refrac);
    });
});

server.get('/resources', (req, res) => {
    db.getResources()
    .then(resources => res.send(resources));
});

server.post('/projects', (req, res) => {
    const newProject = {
        project_name: req.body.project_name,
        project_description: req.body.project_description,
    }
    db.insertProject(newProject)
    .then(() => res.sendStatus(201));
});

server.post('/tasks', (req, res) => {
    const newTask = {
        task_description: req.body.task_description,
        task_notes: req.body.task_notes,
        project_id: req.body.project_id
    }
    db.insertTask(newTask)
    .then(() => res.sendStatus(201));
});

server.post('/resources', (req, res) => {
    const newResource = {
        resource_name: req.body.resource_name,
        resource_description: req.body.resource_description
    }
    db.insertResource(newResource)
    .then(() => res.sendStatus(201));
});



module.exports = server;