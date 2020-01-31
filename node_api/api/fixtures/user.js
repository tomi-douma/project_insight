const { ObjectID: ObjectId } = require('mongodb');
 
module.exports = [
  { _id: ObjectId(),
    email: 'Paul@gmail.com',
    password: 'petitChat51',
    role: 'etudiant',
    session_id: '1',
    created_at: Date.now
  },
  { _id: ObjectId(),
    email: 'Jean@gmail.com',
    password: 'grosChat51',
    role: 'etudiant',
    session_id: '1',
    created_at: Date.now
  },
  { _id: ObjectId(),
    email: 'Admin@gmail.com',
    password: 'larveGluante86',
    role: 'admin',
    session_id: '0',
    created_at: Date.now
  },

];