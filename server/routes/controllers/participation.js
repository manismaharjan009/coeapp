const Participation = require('../../models/participation');
const dataAccessObject = require('../../dataAccessObject');

const ParticipationDAO = dataAccessObject(Participation);

module.exports = {
  getParticipants: (req, res, next) => {
    ParticipationDAO.getAll((err, participants) => err ?  next(err) : res.json(participants));
  },

  getParticipantById: (req, res, next) => {
    ParticipationDAO.getById(req.params.id, (err, participant) => err ? next(err) : res.json(participant));
  },

  createParticipant: (req, res, next) => {
    const { memberId, topic, description, reference, status  } = req.body;
    const newParticipant = new Participation({
      memberId, topic, description, reference, status
    });

    ParticipationDAO.create(newParticipant, (err, participant) => {
      const response = {
        message: 'New Participant involved',
        participant
      };

      return err ? next(err) : res.json(response);
    })
  },

  updateParticipant: (req, res, next) => {
    ParticipationDAO.update(req.params.id, req.body, (err, participant) => {
      const response = {
        message: 'Updated',
        participant
      };

      return err ? next(err) : res.json(response);
    });
  },

  deleteParticipant: (req, res, next) => {
    const message= {
      message: 'Participant removed'
    };

    ParticipationDAO.delete(req.params.id, (err, participant) => err ? next(err) : res.json(message));
  }
}