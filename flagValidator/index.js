// 1. Basic: Only takes the card number as input and determines its type

function validateCreditCard(cardNumber) {
    const cardStr = cardNumber.toString();

    const firstTwoDigits = parseInt(cardStr.slice(0, 2), 10);
    const firstFourDigits = parseInt(cardStr.slice(0, 4), 10);
    const firstThreeDigits = parseInt(cardStr.slice(0, 3), 10);

    if ((firstTwoDigits >= 51 && firstTwoDigits <= 55) || 
        (firstFourDigits >= 2221 && firstFourDigits <= 2720)) {
        return 'MasterCard';
    }

    const eloRanges = ['4011', '4312', '4389', '4514', '4576', '5041', '5067', '5090', '6277', '6362', '6363'];
    if (eloRanges.some(range => cardStr.startsWith(range))) {
        return 'Elo';
    }

    if (cardStr.startsWith('4')) {
        return 'Visa';
    }

    if (cardStr.startsWith('34') || cardStr.startsWith('37')) {
        return 'American Express';
    }

    if (cardStr.startsWith('6011') || cardStr.startsWith('65') || 
        (firstThreeDigits >= 644 && firstThreeDigits <= 649)) {
        return 'Discover';
    }

    if (cardStr.startsWith('6062')) {
        return 'Hipercard';
    }

    return 'Unknown';
}

// Example usage:
console.log(validateCreditCard(4111111111111111)); // Visa
console.log(validateCreditCard(4011788888881881)); // Elo
console.log(validateCreditCard(6011111111111117)); // Discover
console.log(validateCreditCard(6062828888888888)); // Hipercard
console.log(validateCreditCard(593728888888881)); // Unknown