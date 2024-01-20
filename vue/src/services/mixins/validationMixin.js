export class validationMixin {

    static isEmpty(data) {
        return (data === "" || data === null || data === undefined)
    }
    static checkLength(data, min, max){
        return data.length < min || data.length > max
    }

    static validEmail(email) {
        if (validationMixin.isEmpty(email)) {
            return 'Заполните поле email'
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email) ? null : 'В поле email, есть ошибки'
    }
    
    static validLogin(login) {
        if (validationMixin.isEmpty(login)) {
            return 'Напишите имя  (login)'
        }
        if (validationMixin.checkLength(login, 2, 24)) {
            return 'Имя не может быть меньше 2, и больше 24 символов';
        }
        return null

    }
    static validPassword(password) {
        if (validationMixin.isEmpty(password)) {
            return 'Заполните поле'
        }
        // Проверяем наличие цифр
        if (!/\d/.test(password)) {
            return 'Пароль должен содержать цыфры';
        }
        if (validationMixin.checkLength(password, 6, 26)) {
            return 'Пароль не может быть меньше 6, и больше 26 символов';
        }
        return null


        // // Проверяем наличие заглавных букв
        // if (!/[A-Z]/.test(password)) {
        //     return false;
        // }
        
        // // Проверяем наличие специальных символов
        // if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        //     return false;
        // }
    }



}