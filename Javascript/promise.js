
function callOne()
{
    return "Function 1"
}

const callTwo = () => {
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{ 
            resolve("This is resolved")
        } ,3000)
    } )
    // return "function 2 "
}

let callThree = () => { 
    return "function 3"
}

const main = async() => {
    let One = callOne()
    console.log(One)

    let Two = await callTwo()
    console.log(Two)
    
    const Three = callThree()
    console.log(Three)
}

main()
