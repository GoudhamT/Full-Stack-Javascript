/*Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
       */
    


import promptSync from 'prompt-sync';
const prompt = promptSync();

let number = parseInt(prompt("Enter Number : "))

function tri_pattern(num)
{   
    for(let i=1;i<=num;i++)
    {
        console.log('*'.repeat(i))
    } 
    // let tri_p = ''
    // for(let i=1;i<=num;i++)
    // {
    //     for(let j=1;j<=i;j++)
    //     {
    //         tri_p += '*'
    //     }        
    //     tri_p += "\n";
    // }
    // console.log(tri_p)
   
}

function sq_pattern(num)
{    
    for(let i=1;i<=num;i++)
    {
        console.log('*'.repeat(num))
    }
    // let sq_p = ''
    // for(let i=1;i<=num;i++)
    // {
    //     for(let j=1;j<=num;j++)
    //     {
    //         sq_p += '*'
    //     }        
    //     sq_p += "\n";
    // }
    // console.log(sq_p)
   
}

function py_pattern(num) {

 

    for(let i=1; i<= num; i++){
  
      let str = ' '.repeat(num-i);
  
      let str2 = '*'. repeat(i*2 -1)
  
   
  
      console.log(str + str2 + str);
  
    }
  
  }

  
console.log('----------------------------------------')
tri_pattern(number)

console.log('----------------------------------------')
sq_pattern(number)

console.log('----------------------------------------')
py_pattern(number)

