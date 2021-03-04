
module.exports = function toReadable (number) {

    let smallNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teenNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tyNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero'
    }
    ;
    if (number < 10) {
        return smallNum[number];
    } else if (number >= 10 && number < 20) {
        return teenNum[number - 10];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return `${tyNum[Math.floor(number / 10) - 2]}`;
        } else {
            return `${tyNum[Math.floor(number / 10) - 2]} ${smallNum[number % 10]}`;
        }
    } else if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return `${smallNum [Math.floor(number / 100)]} hundred`;
        } else if (Math.floor(number / 10) % 10 === 0) {
            return `${smallNum [Math.floor(number / 100)]} hundred ${smallNum [Math.floor(number % 10)]}`;
        } else if (Math.floor(number / 10) % 10 === 1) {
            return `${smallNum [Math.floor(number / 100)]} hundred ${teenNum[Math.floor(number % 10)]}`;
        } else {
            if (number % 10 === 0) {
                return `${smallNum[Math.floor(number / 100)]} hundred ${tyNum[(Math.floor(number / 10) % 10) - 2]}`;
            } else {
                return `${smallNum[Math.floor(number / 100)]} hundred ${tyNum[(Math.floor(number / 10) % 10) - 2]} ${smallNum[Math.floor(number % 10)]}`;
            }
        }
    }
}
