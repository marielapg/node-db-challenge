
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects')
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {project_id: 1, project_name: 'project 1', project_description: 'description for project 1'},
        {project_id: 2, project_name: 'project 2', project_description: 'description for project 2'},
        {project_id: 3, project_name: 'project 3', project_description: 'description for project 3'}
      ]);
    });
};
