// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let cntry = ["India","UK","Australia","Ethiopia"]

if (cntry.indexOf('Ethiopia') != -1)
{
    console.log("ETHIOPIA")
}
else{
    cntry.push("Ethiopia")
    console.log("Country is added", cntry)
}

