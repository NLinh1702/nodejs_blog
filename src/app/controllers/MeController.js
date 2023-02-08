const Course = require('./models/Course')
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


class MeController {
    // [GET] : /me/stored/courses 
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});
        // console.log(courseQuery); 
        //ascending: nho den lon, descending: lon den nho
        if(req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
        //         name: 'desc'
                [req.query.column]: req.query.type
            });
        }

       
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                })
            )
            .catch(next);

        /*Course.countDocumentsDeleted()
            .then((deletedCount) => {
                console.log(deletedCount);
            })
            .catch(() => {});
            

        Course.find({})
        .then(courses => {
            res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
        */
        
    }


    trashCourses(req, res, next){
        Course.findDeleted({})
        .then(courses => {
            res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }
    
}
 
module.exports = new MeController();

