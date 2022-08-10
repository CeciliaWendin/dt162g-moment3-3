require('../models/database');
const Course = require('../models/CourseModel');

/**
 * GET / 
 * Homepage
 */
exports.homepage = async(req, res) => {

   try {
      const courses = await Course.find({});

      res.render('index', { title: 'Moment 3:3 | Startsida', courses } );
   } catch (error) {
res.status(500).send({message: error.message || 'Något gick fel'} );
   }
}

/**
 * GET /course/:id
 * Single Course
 */
 exports.singleCourse = async(req, res) => {

   try {
      let courseId = req.params.id;

      const course = await Course.findById(courseId);

      res.render('course', { title: 'Moment 3:3 | Enskild kurs', course } );
   } catch (error) {
res.status(500).send({message: error.message || 'Något gick fel'} );
   }
}

/**
 * GET /submit-course
 * Submit Course
*/
exports.submitCourse = async(req, res) => {
   const infoErrorsObj = req.flash('infoErrors');
   const infoSubmitObj = req.flash('infoSubmit');
   res.render('index', { title: 'Moment 3:3 | Lägg till kurs', infoErrorsObj, infoSubmitObj  } );
 }
 
/**
 * POST /submit-course
 * Submit course
 */
 exports.submitCourseOnPost = async(req, res) => {

     const newCourse = new Course({
       courseId: req.body.courseId,
       courseName: req.body.courseName,
       coursePeriod: req.body.coursePeriod
     });
     
     await newCourse.save();
 
     req.flash('infoSubmit', 'Kursen lades till.')
     res.redirect('/');
 }

  // Delete Course
  exports.deleteCourse = async(req, res, next) => {
   Course.findByIdAndRemove(req.params.id, (err, doc) => {
       if (!err) {
           res.redirect('/');
       } else {
           console.log('Något gick fel: ' + err);
       }
   });
}


 

