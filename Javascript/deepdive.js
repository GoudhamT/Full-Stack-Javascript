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

// let UserDetails = {
//     fName : "goudham",
//     age: 30,
//     courseList : [],
//     buyCourse : function(courseName)
//     {
//         this.courseList.push(courseName)
//     },
//     courseCountPerUSer : function()
//     {
//         return `${this.fName} bought ${this.courseList.length} course from Us!`
//     }
// }
// console.log(UserDetails)
// console.log(UserDetails.courseList)
// UserDetails.buyCourse("FSJS")
// console.log(UserDetails.courseList)
// console.log(UserDetails.courseCountPerUSer())

// UserDetails.buyCourse("Data Science")
// console.log(UserDetails.courseCountPerUSer())

function gp()
{
    var a = 10
    let b = 20
    p()
    function p()
    {
        let c = 30
        const d = 40
        child()
        function child()
        {
            var e = 50
            let f = 60
            console.log(e,f)
            console.log(c,d)
            console.log(a,b)
        }
    }
}

gp()