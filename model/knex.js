const knex = require('./connection')

let post_data = ( index) =>{
    return knex('Courses').insert(index)
}

let get_data = () =>{
    return knex.select("*").from('Courses')
}

let get = (course_id) => {
    return knex.select('*').from('Courses').where('course_id',course_id)
}

let update = (course_data,course_id) => {
    return knex('Courses').update(course_data).where("course_id",course_id)
}

let remove = (course_data,course_id) => {
    return knex('Courses').del(course_data).where("course_id",course_id)


}

module.exports = {post_data , get_data, get,update,remove}



