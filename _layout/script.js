//Print odd numbers in an array

(()=>{
    let printOddQuestionArray = [10, 8, 13, 21, 20, 40, 29, 19];
    let printOddAnswerArray = printOddQuestionArray.filter((item)=>{
        return item%2 !== 0;
    });
    console.log("Odd numbers in the Array - ", printOddAnswerArray.join(" "));
})();

//Convert all the strings to title caps in a string array
(()=>{
    let convertToTitleStringQuestionArray = ['this', 'is', 'question', 'about', 'converting', 'all', 'string', 'to', 'title', 'case.'];
    let convertToTitleStringAnswerArray = convertToTitleStringQuestionArray.map((string)=>{
        let splitString = string.split("");
        splitString[0] = splitString[0].toUpperCase();
        return splitString.join("");
    });
    console.log("All strings in Array converted to title Case - ", convertToTitleStringAnswerArray.join(" "))
})();


//Sum of all numbers in an array
(()=>{
   let sumQuestionArray = [10, 30, 60, 90, 100, 20];
   let sumAnswer = sumQuestionArray.reduce((acc, item)=>{
    return acc+item;
   }, 0);

   console.log("Sum of the given Array - ", sumAnswer);
})();

//Return all the prime numbers in an array
(()=>{
    let checkPrime = (n)=>{
        if(n==2)
            return true;
        let c=0;
        for(let i=2; i*i<=n; i++){
            if(n%i === 0) c++;
        }
        return c===0;
    }
    let primeQuestionArray = [10, 929, 928, 200, 587, 3, 2, 647, 1000, 102, 347];
    let answer = primeQuestionArray.filter((item)=>{
        return checkPrime(item);
    });
    console.log("Primes in the Array", answer);
})();

//Return all the palindromes in an array
(()=>{
    let palindromeQuestionArray = ['hello', 'madam', 'name', 'Anna', 'noon', 'time', 'civic']
    let palindromeAnswerArray = palindromeQuestionArray.filter((word)=>{
        return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
    })
    console.log(palindromeAnswerArray);
})();

//Return median of two sorted arrays of same size
(()=>{
    let array1 = [1, 12, 15, 26, 38];
    let array2 = [2, 13, 17, 30, 37];
    let array3 = [];
    let i=0, j=0, c=0;
    while(i<array1.length && j<array2.length){
        if(array1[i]<=array2[j]){
            array3[c] = array1[i];
            i++;
        }else{
            array3[c] = array2[j];
            j++;
        }
        c++;
    }
    if(i<array1.length){
        while(i<array1.length){
            array3[c] = array1[i];
            i++;
            c++;
        }
    }else{
        while(j<array1.length){
            array3[c] = array2[j];
            j++;
            c++;
        }
    }
    let mid = parseInt(array3.length/2);
    let median = parseInt((array3[mid-1] + array3[mid])/2);
    console.log("The median for the arrays is", median);
})();

//Remove duplicates from an array
(()=>{
    let array = [10, 20, 10, 20, 20, 30, 79, 78, 79];
    let set = new Set();
    array.forEach((item)=>{
        set.add(item);
    });

    console.log("Array after removing duplicates", Array.from(set));
})();

//Rotate an array by k times and return the rotated array
(()=>{
    let k = 4;
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    k = k%array.length;
    let newArray = [];

    for(let i=0; i<k; i++){
        let temp = array.pop();
        newArray.push(temp);
    }
    for(let i=0; i<array.length;i++){
        newArray.push(array[i]);
    }
    console.log("Rotated array "+k+" times",newArray);
})();