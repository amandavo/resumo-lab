// 2. Validates patterns concisely and efficient using regular expressions (regex)

function validateCreditCard(cardNumber) {
    const cardStr = cardNumber.toString();

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
console.log(validateCreditCard(4011788888881881)); // Elo
console.log(validateCreditCard(593728888888881)); // Unknown