// вывести все гласные из строки

const string = "Привет! Как дела?";

const vowels = ["е", "у", "а", "и", "ю","я", "э", "ы", "о"];

const getvowels = stringFilter => {
    let vowelsFromString = "";

    for(let i = 0; i < stringFilter.length; i++) {
        const CurrentLetter = stringFilter[i].toLowerCase();

        if( vowels.includes(CurrentLetter) ){
            vowelsFromString += CurrentLetter;
        }
    }

    return vowelsFromString;
}
console.log(getvowels(string));