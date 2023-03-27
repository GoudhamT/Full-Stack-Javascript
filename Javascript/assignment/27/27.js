// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let prime_arr = [0,1,2]

for(let i=3;i<101;i++)
{
    let isPrime = true
    for(let j=2;j<i;j++)
    {
        if(i % j == 0)
        {
            isPrime = false
            break
        }
    }
    if(isPrime)
    {
        prime_arr.push(i)
    }
}

console.log(prime_arr)