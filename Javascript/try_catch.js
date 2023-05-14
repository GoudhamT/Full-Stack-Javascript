
// console.log("name"+name2)

// try{
//     console.log("name"+name2)
// }
// catch(issue) {
//     console.log(issue.name)
// }

// try{
//     console.log(10/0)
// }
// catch(err)
// {
//     console.log(err.name)
// }
// finally{
//     console.log("I will be executing anyway")
// }

function userexcp(mess)
{
    this.message = mess
}
function getMonth(mon)
{
    const months = ['Jan',"Feb","Mar"]
    if (months[mon] !== undefined)
    {
        console.log("months is valid")
    }
    else{
        throw new userexcp("Invalid month")
    }
}

try{
    getMonth(5)
}
catch(er){
    console.log(er.name,er.message)
}

