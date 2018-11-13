const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error(error.message));

// Available schema Datatypes: String, Number, Date, Buffer, Boolean, ObjectID, Array 
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

const course = new Course({
    name: 'Express API 빌드하기',
    author: 'john',
    tags: ['Ethereum', 'Blockchain', 'DApp'],
    isPublished: false
});

course.save()
    .then(result => console.log(result))
    .catch(error => console.log(error));