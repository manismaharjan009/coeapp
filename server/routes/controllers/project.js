const Project = require('../../models/project');
const dataAccessObject = require('../../dataAccessObject');

const ProjectDAO = dataAccessObject(Project);

module.exports = {
  getProjects: (req, res, next) => {
    ProjectDAO.getAll((err, projects) => err ? next(err) : res.json(projects));
  },

  getProjectById: (req, res, next) => {
    ProjectDAO.getById(req.params.id, (err, project) => err ? next(err) : res.json(project));
  },

  createProject: (req, res, next) => {
    const { name, shortname, description } = req.body;
    const newProject = new Project({
      name, shortname, description
    });
    
    ProjectDAO.create(newProject, (err, project) => {
      const response = {
        message: 'New Project  created',
        project
      };

      return err ? next(err) : res.json(response);
    })
  },

  updateProject: (req, res, next) => {
    ProjectDAO.update(req.params.id, req.body, (err, project) => {
      const response = {
        message: 'Project successfully updated.',
        project
      };
      
      return err ? next(err) : res.json(response);
    });
  },

  deleteProject: (req, res, next) => {return 
    const message = {
      message: 'Project record deleted'
    };
    ProjectDAO.delete(req.params.id, (err, project) => err ? next(err) : res.json(message));
  }

}