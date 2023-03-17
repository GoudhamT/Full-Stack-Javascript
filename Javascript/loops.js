//Loops in JS
for(i=0;i<=5;i++)
{
    console.log(`${i}*${i} is ${i*i}`)
}

//do while -> loop is executed atleast once before checking condition
j = 0
do
{
    console.log(j)
    j++
}while(j<6)

k=0
while(k<10){
    console.log(k)
    ++k;
}

//for of loop
myarr = ["goudham","niralya","nithila",1,2,true]
myarr_upper = []

for(let name of myarr)
{
    if(typeof(name)=== 'string'){
        myarr_upper.push(name.toUpperCase())
    }
    else
    {
        continue
    }
    
}
console.log(myarr_upper)