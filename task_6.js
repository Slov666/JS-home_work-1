let input;
let total = 0;
do {
    input = prompt('Введите число');

    if (input === null) {
        console.log(`Общая сума чисел ${total}`);
        break;
    }
    input = Number(input);
    total += input;
} while (true);