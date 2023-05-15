// const number = [1,2,3,4,"goudham"]
// for (let i of number)
// {
//     console.log(i)
// }
// for(let i in number)
// {
//     console.log(i)
// }
// let det = {1:"goudham",2:"vijitha"}

// for(let i in det)
// {
//     console.log(i)
// }

// for(let i in det)
// {
//     console.log(det[i])
// }

let UserDetails = {
    fName : "goudham",
    age: 30,
    courseList : [],
    buyCourse : function(courseName)
    {
        this.courseList.push(courseName)
    },
    courseCountPerUSer : function()
    {
        return `${this.fName} bought ${this.courseList.length} course from Us!`
    }
}
console.log(UserDetails)
console.log(UserDetails.courseList)
UserDetails.buyCourse("FSJS")
console.log(UserDetails.courseList)
console.log(UserDetails.courseCountPerUSer())

UserDetails.buyCourse("Data Science")
console.log(UserDetails.courseCountPerUSer())