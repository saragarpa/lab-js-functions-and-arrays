// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {
    if (!wordsArr.length) {
        return null;
    }

    let longestWord = '';
    for (let i = 0; i <= wordsArr.length - 1; i++){
        const word = wordsArr[i];

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
    if (!numArr.length) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        const num = numArr[i];
        sum += num;
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
    if (!numArr.length) {
        return 0;
    }

    let sum = sumNumbers(numArr);

    let average = sum / numArr.length; 
    return average;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, wordSearch) {
    if (!wordsArr.length) {
        return null;
    }

    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        if (word === wordSearch) {
            return true;
        } 
    }
    return false;
}
