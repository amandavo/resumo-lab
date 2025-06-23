// 4. Advanced: Code more modular, added input validation, ensuring robust validation

// Utility function: Luhn Algorithm to validate the card number
function isValidLuhn(cardStr) {
    let sum = 0;
    let shouldDouble = false;

    // Process digits from right to left
    for (let i = cardStr.length - 1; i >= 0; i--) {
        let digit = parseInt(cardStr[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// Credit card patterns
const CARD_PATTERNS = {
    MasterCard: /^(5[1-5]\d{14}|2(2[2-9]\d{2}|[3-6]\d{3}|7[01]\d{2}|720)\d{12})$/, // 51-55 or 2221-2720
    Elo: /^(4011|4312|4389|4514|4576|5041|5067|5090|6277|6362|6363)\d*$/,
    Visa: /^4\d{12,18}$/, // Starts with 4
    AmericanExpress: /^3[47]\d{13}$/, // Starts with 34 or 37
    Discover: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/, // 6011, 65 or 644-649
    Hipercard: /^6062\d{12,15}$/, // Starts with 6062
    DinersClub: /^3(0[0-5]|[68]\d)\d{11}$/, // Starts with 300-305, 36, or 38
    EnRoute: /^2(014|149)\d{11}$/, // Starts with 2014 or 2149
    JCB: /^(352[89]|35[3-8]\d)\d{12}$/, // Starts with 3528-3589
    Voyager: /^8699\d{11}$/, // Starts with 8699
    Aura: /^50\d{14}$/, // Starts with 50
};

// Main function to validate credit card
function validateCreditCard(cardNumber) {
    // Ensure the input is a string and contains only digits
    const cardStr = cardNumber.toString().trim();
    if (!/^\d+$/.test(cardStr)) {
        return 'Invalid input: Card number must contain only digits';
    }

    // Validate using Luhn Algorithm
    if (!isValidLuhn(cardStr)) {
        return 'Invalid card number (Luhn check failed)';
    }

    // Match the card number against known patterns
    for (const cardType of Object.keys(CARD_PATTERNS)) {
        if (CARD_PATTERNS[cardType].test(cardStr)) {
            return cardType;
        }
    }

    // If no pattern matches, return unknown
    return 'Unknown card type';
}

// Example usage
console.log(validateCreditCard(4485713716237452)); // Visa
console.log(validateCreditCard(6362977268125638)); // Elo
console.log(validateCreditCard(5555555555554444)); // MasterCard
console.log(validateCreditCard(371449635398431));  // AmericanExpress
console.log(validateCreditCard(6011111111111117)); // Discover
console.log(validateCreditCard(6062822272045617)); // Hipercard
console.log(validateCreditCard(30569309025904));   // DinersClub
console.log(validateCreditCard(201410781132624));  // EnRoute
console.log(validateCreditCard(3530111333300000)); // JCB
console.log(validateCreditCard(869900967770422));  // Voyager
console.log(validateCreditCard(5072300047049131)); // Aura
