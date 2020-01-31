const { ObjectID: ObjectId } = require('mongodb');
 
module.exports = [
  { _id: ObjectId(),
    name: 'Git',
    intervenant_id: '5',
    session_id: '1',
    date_debut: '2020-02-03',
    date_fin: '2020-02-7'
  },
  { _id: ObjectId(),
    name: 'Docker',
    intervenant_id: '2',
    session_id: '1',
    date_debut: '2020-02-10',
    date_fin: '2020-02-14'
  },
  { _id: ObjectId(),
    name: 'Python',
    intervenant_id: '1',
    session_id: '1',
    date_debut: '2020-02-17',
    date_fin: '2020-02-21'
  },

];