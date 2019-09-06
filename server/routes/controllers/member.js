const Member = require('../../models/member');
const dataAccessObject =  require('../../dataAccessObject');

const MemberDAO =  dataAccessObject(Member);

/*  NOTE : References
  1. https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  2. https://github.com/krissnawat/nodejs-restapi/tree/ep-12
  3. https://getstream.io/blog/building-a-node-js-powered-api-with-express-mongoose-mongodb/
  4. https://stackoverflow.com/questions/14990544/how-to-best-create-a-restful-api-in-node-js

*/

module.exports = {
  getMembers:(req, res, next) => {
    MemberDAO.getAll((err, members) => err ? next(err) : res.json(members));
  },

  getMembersById:(req, res, next) => {
    MemberDAO.getById(req.params.id,  (err, member) => err ? next(err) :  res.json(member));
  },

  createMember: (req, res, next) => {
    const { fullname, role, description } = req.body;
    const newMember =  new Member({
      fullname, role, description
    });
    MemberDAO.create(newMember, (err, member) => {
      const response = {
        message: 'New Member created.',
        member
      };
      return err ? next(err) : res.json(response);
    }); 
  },

  updateMember:(req, res, next) => {    
    MemberDAO.update(req.params.id, req.body, (err, member) => {
      const response = {
        message: 'Member successfully updated.',
        member
      };
      err ?  next(err) :  res.json(response);
    })
  },

  deleteMember: (req, res, next) => {
    const message = {
      message: 'Member deleted.'
    };

    MemberDAO.delete(req.params.id, (err, member) => err ? next(err) : res.json(message));
  }
}