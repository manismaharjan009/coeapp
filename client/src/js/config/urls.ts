const { protocol, host } =  window.location;
const rootPath = `${protocol}//${host}/api`;

const urls = {
  // Members
  fetchMembers: `${rootPath}/getMembers`,
  fetchMemberById: `${rootPath}/getMemberById`,
  createMember: `${rootPath}/createMember`,
  updateMember: `${rootPath}/updateMember`,
  deleteMember: `${rootPath}/deleteMember`,
  profileUpload: `${rootPath}/profile`,

  // Login
  // https://xepst.javra.com/cgi-bin/wspd_cgi102b.sh/WService= xePST-prod-web/js/jsread.p?call=login&userid=" + req.body.username + "&password=" + req.body.password + "";
  login: 'https://xepst.javra.com/cgi-bin/wspd_cgi102b.sh/WService= xePST-prod-web/js/jsread.p',
  employeeList: 'https://xepst.javra.com/cgi-bin/wspd_cgi102b.sh/WService=xePST-prod-web/js/jsread.p?call=empinfo',
  corsUrl: 'https://cors-anywhere.herokuapp.com/',
  // Projects
  fetchProjects: `${rootPath}/getProjects`,
  fetchProjectById: `${rootPath}/getProjectById`,
  createProject: `${rootPath}/createProject`,
  updateProject: `${rootPath}/updateProject`,
  deleteProject: `${rootPath}/deleteProject`,

  // ProjectUpdates
  fetchProjectUpdates: `${rootPath}/getProjectUpdates`,
  fetchProjectUpdateById: `${rootPath}/getProjectUpdateById`,
  createProjectUpdate: `${rootPath}/createProjectUpdate`,
  updateProjectUpdate: `${rootPath}/updateProjectUpdate`,
  deleteProjectUpdate: `${rootPath}/deleteProjectUpdate`,

  // Participants
  fetchParticipants: `${rootPath}/getParticipants`,
  fetchParticipantById: `${rootPath}/getParticipantById`,
  createParticipant: `${rootPath}/createParticipant`,
  updateParticipant: `${rootPath}/updateParticipant`,
  deleteParticipant: `${rootPath}/deleteParticipant`,
};

export default urls;
