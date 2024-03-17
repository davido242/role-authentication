const { ROLE } = require('../data');

function canViewProject(user, project) {
  return (
    user.role === ROLE.ADMIN ||
    project.id === user.id
    )
}

module.exports = { canViewProject }