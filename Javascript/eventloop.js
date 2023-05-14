
function callone()
{
    console.log("function 1 is called")
}

const calltwo = ()=>{ 
    
    setTimeout( ()=> console.log("Intermediate fun2"),3000 )
    console.log("function 2 is called")
}

let callthree = () => console.log("function 3 is called")


// calltwo ()
// callone()
// callthree()

///implementing eventloop example 2

/*sequence of execution:
1 - final_add is called
2 - before priting log, internally initial_add is called
3 - prints log then perform add operation as per seq
4 - control came to final add, prints log
5 - return total value

when set timeout is added
1 - final add is called
2 - control transfer to initial add func
3 - as timeout is called in func1 - cursor moves to next line
4 - perform operation
5 - control came to finall func
6 - print log
7 - now JS picks timeout code and print log
*/
function initial_add(z)
{
    // setTimeout( () => console.log("initial add func"),2000)    
    console.log("initial add func")
    let a = 10    
    return 10 + z + 20
}

function final_add(y)
{
    const x = initial_add(y*3)
    console.log("final add func")
    return x + y
}

// console.log(final_add(1))

// event loop example 3 
/*
1 - started will be printed
2 - as timeout1 is set - moves to queue
3 - middle is printed
4 - as timeout2 is set - moves to queue
5 - final is printed

comparing 2 & 3 - timeout at 3 is lesser time so it will be printed first
then timeout 2 will be printed

*/
(
    () => { 

        console.log("Started")

        setTimeout( () => console.log("Timeout 1 is called"), 2000)

        console.log("this is middle code")

        setTimeout(() => { console.log("timeout 2 is called")}, ); //when timeout seconds is not given default 0 will be taken

        console.log("this is final")
    }

)
()