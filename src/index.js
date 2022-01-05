module.exports = function toReadable (n) {

    const discharge = (n, i) => n % (10**i);

    const numberString = n => {
        switch (n){
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5: 
                return "five"; 
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            default:
                return "Out of range 1-9";
        }
    }

    const numberTwoRange = number => {
        switch (number){
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
            default:
                return "Out of range 10-19";
        }
    }

    const numberDecade = decade => {
        switch (decade) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
            default:
                return "Out of range 1-9 decade";
        }
    }
    if (n === 0) return "zero";
    const numberLength = n.toString().length;
    let result = "";
    for (let i = 1 ; i <= numberLength ; i++){
        if (numberLength >= 2 && i === 1){
            if(discharge(n,2) >= 10 && discharge(n,2) <= 19){
                result = `${numberTwoRange(discharge(n,2))}${result}`;
                if(numberLength === 2) return result;
                n = (n - discharge(n,2)) / 100;
                i = 3;
            }
        }
        switch (i) {
            case 1:
                if (discharge(n,1) === 0){
                    n = (n - discharge(n,1)) / 10;
                    break;
                }
                result = `${numberString(discharge(n,1))}${result}`;
                n = (n - discharge(n,1)) / 10;
                break;
            case 2:
                if (discharge(n,1) === 0){
                    n = (n - discharge(n,1)) / 10;
                    break;
                }
                result = `${numberDecade(discharge(n,1))} ${result}`;
                n = (n - discharge(n,1)) / 10;
                break;
            case 3:
                result = `${numberString(n)} hundred ${result}`;
                break;
        }
    }
    return result.trim();
}
