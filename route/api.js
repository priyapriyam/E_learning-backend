const knex = require('../model/knex')
module.exports=(app)=>{
    app.post('/post',(req,res) =>{
        let index = {
            courses_name : req.body.courses_name,
            discription :req.body.discription
        }
        knex.post_data(index)
        .then((result )=>{
            console.log(result)
            res.send("data inserted")
        })
        .catch ((err)=>{
            res.send (err)
    
        })
    })
    
    app.get('/all_courses',(req,res) => {
        knex.get_data()
        .then((result) => {
            res.send(result)
            console.log("data is readble")
        })
        .catch((err)=>{
            res.send(err)
        })
    })
    app.get('/all_courses/:course_id',(req,res) => {
        let course_id = req.params.course_id;
        knex.get(course_id)
        .then((result) => {
            res.send(result)
            console.log("data is readble")
        })
        .catch((err)=>{
            res.send(err)
        })
    });
    
    app.put('/edit_course/:course_id',(req,res) => {
        let course_id = req.params.course_id;
        let course_data={
            courses_name:req.body.courses_name,
            discription:req.body.discription
        }
        knex.update(course_data,course_id)
        .then((result) => {
            res.send({result})
            console.log("data is updated")
        })
        .catch((err)=>{
            console.log("select id do not exist");
            res.send(err);
        })
    });
    
    
    
    app.delete('/api/:course_id',(req,res) => {
        let course_id = req.params.course_id;
        let course_data={
            courses_name:req.body.courses_name,
            discription:req.body.discription
        }
        // knex('Courses').del(course_data).where("course_id",course_id)
        knex.remove(course_data,course_id)
        .then(({result}) => {
            res.send(result)
            console.log("data is deleted")
        })
    
    });
}










