let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let buyDroid = prompt("Сколько вы хотите купить дронов?");
buyDroid = Number(buyDroid);


if (buyDroid === null) {
  console.log("Отменено пользователем!");
} else if (pricePerDroid * buyDroid <= credits) {
  totalPrice = buyDroid * pricePerDroid;
  console.log(`
  Вы купили ${totalPrice / pricePerDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.
  `);
} else if (pricePerDroid * buyDroid > credits) {
  console.log(`Недостаточно средств на счету!`);
}