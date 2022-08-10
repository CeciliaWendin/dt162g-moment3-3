const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

courseId: {
   type: String,
   required: 'Fältet är obligatoriskt.'
},
courseName: {
   type: String,
   required: 'Fältet är obligatoriskt.'
},
coursePeriod: {
   type: String,
   required: 'Fältet är obligatoriskt.'
}

});

module.exports = mongoose.model('Course', courseSchema);