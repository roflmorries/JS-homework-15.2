document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const getValue = id => document.getElementById(id).value.trim() || 'Ничего не выбрано!';
    const getChekedValue = name => document.querySelector(`input[name="${name}"]:checked`)?.value || 'Ничего не выбрано!';
    const getCheckedValues = name => Array.from(document.querySelectorAll(`input[name="${name}"]:checked`), cb => cb.value).join(', ') || 'Ничего не выбрано!';


    const firstName = getValue('firstName');
    const lastName = getValue('lastName');
    const bday = getValue('birthDate');
    const gender = getChekedValue('gender');
    const city = getValue('city');
    const adress = getValue('adress');
    const language = getCheckedValues('language');


    const validationName = /^[A-ZА-Я][a-zа-я]{1,}$/;
    const validationAdress = /^[A-ZА-Я][a-zа-я0-9.,-]{4,}$/;
    const validationDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    const registrationForm = document.getElementById('registrationForm');

    if (!validationName.test(firstName) || !validationName.test(lastName) || !validationAdress.test(adress)) {
        const notification = document.getElementById('notification');

        registrationForm.classList.add('invalid');
        notification.innerHTML = `
        <p>Строки ввода могут содержать только Ру/Eng буквы и символы</p>
        `;
        setTimeout(() => notification.innerHTML = ``, 2000)
        setTimeout(() => registrationForm.classList.remove('invalid'), 1000);
        return;
    } else {
        document.getElementById('results').classList.add('valid');
        setTimeout(() => document.getElementById('results').classList.remove('valid'), 500);

    }

    if (!validationDate.test(bday)) {
        console.log(bday)
        const notification = document.getElementById('notification');

        registrationForm.classList.add('invalid');
        notification.innerHTML = `
        <p>Неверно заполненная дата!</p>
        `;
        setTimeout(() => notification.innerHTML = ``, 2000)
        setTimeout(() => registrationForm.classList.remove('invalid'), 1000);
        return;
    }


    document.getElementById('results').innerHTML = `
    <p>Имя: ${firstName}</p>
    <p>Фамилия: ${lastName}</p>
    <p>Дата рождения: ${bday}</p>
    <p>Пол: ${gender}</p>
    <p>Город: ${city}</p>
    <p>Адрес: ${adress}</p>
    <p>Язык: ${language}</p>
    `;

    document.getElementById('registrationForm').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').classList.add('results')

})