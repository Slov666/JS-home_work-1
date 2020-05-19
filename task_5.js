let country = prompt('Укажите страну для оформления доставки в вашу страну');
country = country.toLocaleLowerCase();
let credits;
switch (country) {
    case 'китай':
        console.log(`Доставка в Китай будет стоить ${credits = 100} кредитов`);
        break;
    case 'чили':
        console.log(`Доставка в Чили будет стоить ${credits = 250} кредитов`);
        break;
    case 'австрия':
        console.log(`Доставка в Австрия будет стоить ${credits = 170} кредитов`);
        break;
    case 'индия':
        console.log(`Доставка в Индия будет стоить ${credits = 80} кредитов`);
        break;
    case 'ямайка':
        console.log(`Доставка в Ямайка будет стоить ${credits = 120} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна')

}