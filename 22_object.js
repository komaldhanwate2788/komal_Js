const course = {
    id:"1",
    price:"999",
    courseInstructor:"Komal Rajole"
}

// console.log(course.courseInstructor)
const {courseInstructor} = course
const {courseInstructor: instuctor} = course

console.log(instuctor)
console.log(courseInstructor)