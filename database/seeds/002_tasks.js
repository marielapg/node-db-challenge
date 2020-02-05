
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {task_id: 1, task_description: 'task is complete', project_id:1},
        {task_id: 2, task_description: 'task needs to be complete later today', project_id:2},
        {task_id: 3, task_description: 'task is not complete', project_id:3}
      ]);
    });
};
