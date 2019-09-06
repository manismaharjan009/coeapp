const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const singleType = upload.single('file');
const multiType = upload.single('file');

const Members = require('./controllers/member');
const Projects = require('./controllers/project');
const ProjectUpdates = require('./controllers/projectUpdate');
const Participation =  require('./controllers/participation');
const Uploads = require('./controllers/uploads');


module.exports = (router) => {
  // API routes
  /* fs.readdirSync(__dirname + '/api/').forEach((file) => {
    // will fail if the file name has more than one dots(.)
    console.log('* '+file)
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(router);
  }); */

  router
    // Uploads
    .post('/profile', singleType, Uploads.uploadSingle)
    // .post('/profile', Uploads.uploadMultiple)

    //members
    .get('/getMembers', Members.getMembers) // Get all member details
    .get('/getMembersById/:id', Members.getMembersById) // Get single member details
    .post('/createMember', Members.createMember) // add new member
    .put('/updateMember/:id', Members.updateMember) // Update selected member
    .delete('/deleteMember/:id', Members.deleteMember) // Delete existing member

    //Project
    .get('/getProjects', Projects.getProjects)
    .get('/getProjectById/:id', Projects.getProjectById)
    .post('/createProject', Projects.createProject)
    .put('/updateProject/:id', Projects.updateProject)
    .delete('/deleteProject/:id', Projects.deleteProject)

    //ProjectUpdates
    .get('/getProjectUpdates', ProjectUpdates.getProjectUpdates)
    .get('/getProjectUpdatesById/:id', ProjectUpdates.getProjectUpdatesById)
    .post('/createProjectUpdate/', ProjectUpdates.createProjectUpdate)
    .put('/updateProjectUpdate/:id', ProjectUpdates.updateProjectUpdate)
    .delete('/deleteProjectUpdate/:id', ProjectUpdates.deleteProjectUpdate)

    //Participation
    .get('/getParticipants', Participation.getParticipants)
    .get('/getParticipantById/:id', Participation.getParticipantById)
    .post('/createParticipant/', Participation.createParticipant)
    .put('/updateParticipant/:id', Participation.updateParticipant)
    .delete('/deleteParticipant/:id', Participation.deleteParticipant)
};
