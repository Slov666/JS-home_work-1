const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let pass = prompt('Введите пароль');

if (pass === null) {
    message = 'Отменено пользователем!';
    console.log(message);

} else if (pass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    console.log(message);

} else if (pass !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
}

alert(message);