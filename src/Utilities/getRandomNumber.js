function getRandomNumber(min, max) {
    const randomDecimal = Math.random();

    const randomInRange = min + randomDecimal * (max - min + 1);

    const randomNumber = Math.floor(randomInRange);

    return randomNumber;
}

export default getRandomNumber;
