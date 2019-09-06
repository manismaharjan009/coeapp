const ProjectUpdate = require('../../models/projectUpdate');
const Member = require('../../models/member');
const dataAccessObject =  require('../../dataAccessObject');

const ProjectUpdateDAO = dataAccessObject(ProjectUpdate);
const MemberDAO = dataAccessObject(Member);

module.exports = {
  getProjectUpdates: (req, res, next) => {
    ProjectUpdateDAO.getAll((err, projectUpdates) => err ? next(err) : res.json(projectUpdates));
  },

  getProjectUpdatesById: (req, res, next) => {
    ProjectUpdateDAO.getById(req.params.id, (err, projectUpdate) => err ? next(err) : res.json(projectUpdate));
  },

  createProjectUpdate: (req, res, next) => {
    const { memberId, projectId, updates, accomplishment, problems } = req.body;
    const newProjectUpdate = new ProjectUpdate({
      memberId, projectId, updates, accomplishment, problems
    });
    ProjectUpdateDAO.create(newProjectUpdate, (err, projectUpdate) => {
      const response = {
        message: 'New Project Update created',
        projectUpdate
      }
      return err ? next(err) : res.json(response);
    });
  },

  updateProjectUpdate: (req, res, next) => {    
    ProjectUpdateDAO.update(req.params.id, req.body, (err, projectUpdate) => {
      const response = {
        message: 'Project successfully updated.',
        projectUpdate
      };
      return err ? next(err) : res.json(response);
    });
  },

  deleteProjectUpdate: (req, res, next) => {
    const message = {
      success: 'Record delete successfully',
      error: 'Cannot delete record'
    };

    const item = ProjectUpdate.findById(req.params.id, (err, member) => {
      const memberId = member.memberId;
      Member.findById(memberId, (err, member) => {
        if(member !== null) {
          return res.json({
            message: message.error
          });
        } else {
            ProjectUpdateDAO.delete(req.params.id, (err, projectUpdate) => err ? next(err) : res.json(message.success));
        }
      })
    });

    // ProjectUpdateDAO.delete(req.params.id, (err, projectUpdate) => err ? next(err) : res.json(message));
  }

}