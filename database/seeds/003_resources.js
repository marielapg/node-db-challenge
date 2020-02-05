
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {resource_id: 1, resource_name: 'computer', resource_description: 'This resource is really important'},
        {resource_id: 2, resource_name: 'mouse', resource_description: 'This resource is important'},
        {resource_id: 3, resource_name: 'headphones', resource_description: 'This resource is semi important'},
      ]);
    });
};
