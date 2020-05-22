let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let buyDroid = prompt("Сколько вы хотите купить дронов?");



if (buyDroid === null) {
  console.log("Отменено пользователем!");
}
else if (pricePerDroid * buyDroid <= credits) {
  buyDroid = Number(buyDroid);
  totalPrice = buyDroid * pricePerDroid;
  console.log(`
  Вы купили ${totalPrice / pricePerDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.
  `);
} else {
  console.log(`Недостаточно средств на счету!`);
}