export class validationMixin {

    validEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        emailPattern.test(email) ? false : true
    }

    validatePassword(password) {
        // Проверяем длину пароля
        if (password.length < 8 || password.length > 26) {
            return false;
        }

        // Проверяем наличие цифр
        if (!/\d/.test(password)) {
            return false;
        }

        // Проверяем наличие заглавных букв
        if (!/[A-Z]/.test(password)) {
            return false;
        }

        // Проверяем наличие специальных символов
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return false;
        }

        // Если все условия выполнены, пароль считается валидным
        return true;
    }
    

}