let selectElementsStartingWithA = (array) => {
    let resultat = [];
    array.forEach(e => {
        if (e.startsWith("a")) {
            resultat.push(e);
        }
    });
    return resultat;
};

let selectElementsStartingWithVowel = array => {
    let result = [];
    array.forEach(e => {
        if (/^[aeiouy]/.test(e)) result.push(e);
    });
    // methode regex (expression régulière)
    return result;
};

let removeNullElements = array => {
    return array.filter(e => {
        return e !== null;
    });
};
let removeNullAndFalseElements = (array) => {
    return array.filter(e => {
        return (e !== null && e !== false);
    });
}

let reverseWordsInArray = (array) => {
    let result = [];
    array.forEach(e => {
        result.push(e.split("").reverse().join(""));
    });
    // arr = arr.reverse();
    // arr = arr.join("");
    return (result);
}


let everyPossiblePair = (array) => {
    // let newArrin = []
    // arr.forEach(e => {
    //     let result = array.split("")
    //     let array1 = array[0] + array[1];
    //     let array2 = array[0] + array[2];
    //     let array3 = array[1] + array[2];
    //     result = array.join("");
    //     result = array1 + array2 + array3;
    //     newArrin = newArrin[result];
    // });
    // return (newArrin);

}

let allElementsExceptFirstThree = array => {
    array.splice(0, 3);
    return (array);
};

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return (array);
};

let sortByLastLetter = (array) => {

    let result = [];
    array.forEach(e => {
        result.push(e.split("").reverse().join(""));
    });
    result.sort()
    // on trie par ordre alphabétique
    let tab = []
    result.forEach(e => {
        tab.push(e.split("").reverse().join(""));
    });
    return (tab);
}




let getFirstHalf = (string) => {
    let arr = string.split("");
    let halfLength = Math.round(arr.length / 2);
    return (arr.splice(0, halfLength).join(""));


}

let makeNegative = (number) => {
    if (number > 0) {
        return -number;
    } else {
        return number
    };
}

let numberOfPalindromes = (array) => {
    let result = [];
    array.forEach(e => {
        let palin = e.split("");
        palin = palin.reverse();
        palin = palin.join("");
        if (palin == e) {
            result.push(palin);
        }
    })
    return (result.length);


}

let shortestWord = (array) => {
    array.sort((a, b) => {
        return a.length - b.length;
    });
    return array[0];
}


let longestWord = (array) => {
    array.sort((a, b) => {
        return b.length - a.length;
    });
    return array[0];
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    array.split("");

    return Object.assign({}, array);

}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}