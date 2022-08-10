const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

/**
 * App Routes
 */
router.get('/', courseController.homepage);
router.get('/course/:id', courseController.singleCourse);
router.get('/', courseController.submitCourse);
router.post('/', courseController.submitCourseOnPost);
router.get('/delete/:id', courseController.deleteCourse);




module.exports = router;