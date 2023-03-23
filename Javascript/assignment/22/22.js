/*The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method*/

    function arr_avg(arr){
        let avg = 0;
        for(let i=0;i<arr.length;i++)
        {
            avg += arr[i]
        }
        return avg / arr.length
    }

    function arr_median(arr){
        let median = 0
        if (arr.length % 2 == 0)
        {
            // console.log(arr[Math.floor(arr.length / 2 ) - 1])
            median = ( arr[Math.floor(arr.length / 2 ) - 1] + arr[Math.floor(arr.length / 2) -2 ] ) / 2
            
        }
        else
        {
            median = arr[Math.floor(arr.length / 2 )]
        }
        return median 
    }
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ages.sort()
    console.log(ages);
    let ages_min = Math.min(...ages)
    let ages_max = Math.max.apply(ages,ages)
    console.log("Minimum value in given array is ", ages_min)
    console.log("Maximum value in given array is ", ages_max)
    console.log("Age's average is ",arr_avg(ages))
    console.log(`Ages are range in between ${ages_min} and ${ages_max} is ${ages_max-ages_min}` )
    console.log("Median for given ages is",arr_median(ages))