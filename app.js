// Q1: Print out the numbers 1 to 10 in descending order.
for (let i = 10; i >= 0; i--) {
    console.log(`Printing number ${i}`)
}

// Q2: Implement FizzBuzz. For the numbers 1- 100:

const fizzBuzz = () => {
    for (let i = 0; i <= 100; i++){
        if (i % 3 == 0 && i % 4 == 0) {
            console.log('fizzbuzz')
        } else if (i % 4 == 0) {
            console.log('buzz')
        } else if (i % 3 == 0 ) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}
// fizzBuzz()

//Q3: A square number is the product of some integer with itself. For example, 9 is a square
// number, since it can be written as 3 × 3.

const squareNumbers = (start, length) => {
    const arr = []
    for (let i = start; i <= length; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            console.log(i)
            arr.push(i)
        }
    }
    return arr
}
// comment out below line to print square numbers between 1000 and 10000
// squareNumbers(1000,10000)

const findSqrPairs = () => {
    const sqrNumbersArr = squareNumbers(0,1000)
    // console.log(sqrNumbersArr)
    const loop = (num) => {
        return sqrNumbersArr.filter(num2 => {
            if (num + num2 === 1000) {
                return num2;
            }
            return
        });
    } 
       
    const pairs = sqrNumbersArr.map((num) => {
        const otherPair = loop(num);
        return [...otherPair, num]
       
    }).filter(arr => arr.length > 1);
    console.log(pairs)
    return pairs
}
findSqrPairs()


// Q4) Create a class structure that can be used to represent shapes. Create a Square and Triangle
// class. Write a method that will calculate the area of the shapes.
// Write tests to show the area method works for both.


// Q6) Write a method that will check if two strings are anagrams of each other.


   
    function areAnagram(str1,str2)
    {
        const str1Arr = str1.split('')
        const str2Arr = str2.split('')
        // Get lengths of both strings
        let n1 = str1Arr.length;
        let n2 = str2Arr.length;
   
        // If length of both strings is not same,
        // then they cannot be anagram
        if (n1 != n2)
            return false;
   
        // Sort both strings
        str1Arr.sort();
        str2Arr.sort()
   
        // Compare sorted strings
        for (let i = 0; i < n1; i++)
            if (str1Arr[i] != str2Arr[i])
                return false;
   
        return true;
    }
     
     
    // Function Call
 
if (areAnagram('PART', 'TRAP'))
            document.write("The two strings are"
                               + " anagram of each other<br>");
        else
            document.write("The two strings are not"
                               + " anagram of each other<br>");
