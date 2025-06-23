// 3. Intermediate: Validates the card number using the Luhn algorithm before checking its type.

function validateCreditCard(cardNumber) {
    const cardStr = cardNumber.toString();

    // Luhn Algorithm to validate the card number
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

    if (!isValidLuhn(cardStr)) {
        return 'Invalid card number (Luhn check failed)';
    }

    const patterns = {
        MasterCard: /^(5[1-5]\d{14}|2(2[2-9]\d{2}|[3-6]\d{3}|7[01]\d{2}|720)\d{12})$/, // 51-55 or 2221-2720
        Elo: /^(4011|4312|4389|4514|4576|5041|5067|5090|6277|6362|6363)\d*$/,
        Visa: /^4\d{12,18}$/, // Starts with 4
        AmericanExpress: /^3[47]\d{13}$/, // Starts with 34 or 37
        Discover: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/, // 6011, 65 or 644-649
        Hipercard: /^6062\d{12,15}$/ // Starts with 6062
    };

    for (const [cardType, regex] of Object.entries(patterns)) {
        if (regex.test(cardStr)) {
            return cardType;
        }
    }

    return 'Unknown';
}

// Example usage:
console.log(validateCreditCard(4111111111111111)); // Visa
console.log(validateCreditCard(4011788888881881)); // Elo turns Invalid
console.log(validateCreditCard(6362977268125638)); // Elo
console.log(validateCreditCard(5098714137604136)); // Unknown
console.log(validateCreditCard(593728888888881)); // Invalid card number (Luhn check failed)