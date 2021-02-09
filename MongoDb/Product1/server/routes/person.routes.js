const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/show', PersonController.show);
    app.post('/api/people', PersonController.createPerson);
}
