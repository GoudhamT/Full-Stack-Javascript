// Write a program to check that the number given by the user is a prime number or not.
import promptSync from 'prompt-sync';
    const prompt = promptSync();

    let num = parseInt(prompt("Enter number: "))
    if (num > 0)
    {
        if (num <= 2)
        {
            console.log(`Number ${num} is not prime`)
        }
        else{
            if( num % 2 == 0)
            {
                console.log(`Number ${num} is not prime`)
            }
            else{
                let isPrime = true
                for(let i=3 ;i<num;i++)
                {
                    if (num % i == 0){
                        console.log(`Number ${num} is not prime`)
                        isPrime = false
                        break;
                    }
                }
                if(isPrime){
                    console.log(`Number ${num} is prime`)
                }
            }
        }
    }
    else{
        console.log("Always give number greater than 0")
    }
    