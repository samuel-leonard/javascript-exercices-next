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
    let count = 0;
    for (i = 0; i < array.length; i++) {
        count = count + array[i];
    }
    return count
}

let repeatElements = (array) => {
    array.forEach(e => {
        array.push(e);
    })
    return array;
}

let stringToNumber = (string) => {
    let number = parseInt(string);
    return number;
}


let calculateAverage = (array) => {
    return array.reduce((a, b) => (a + b)) / array.length;
}



let getElementsUntilGreaterThanFive = (array) => {
    array.splice(6, array.length);
    return array;
}

// let convertArrayToObject = (array) => {
//     return Object.assign({}, array);
// }


// let getAllLetters = (array) => {
//     let data = array.split(",");
//     console.log(data);
// }


let swapKeysAndValues = (object) => {
    let new_obj = {};

    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            new_obj[object[prop]] = prop;
        }
    }
    console.log(new_obj);
    return new_obj;
};


let sumKeysAndValues = (object) => {
    let value = Object.values(object);
    let keys = Object.keys(object);
    keys.forEach(k => {
        value.push(parseInt(k));
    })
    let result = 0;
    value.forEach(r => {
        result += r;
    })
    return (result);
}


let removeCapitals = (string) => {
    
    return(string.replace(/[A-Z]/g,""));
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