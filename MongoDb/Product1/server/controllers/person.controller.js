const { Person } = require('../models/person.model');
module.exports.show = (request, response) => {
    // response.json({
    Person.find()
    .then(ShowAll => response.json(ShowAll))
    .catch(err => response.json({message:"somsing went wrong ", error:err}))
    //     message: "Hello World"
    // });

}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { title, price , description  } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
