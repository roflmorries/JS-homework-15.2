document.querySelector('.submit_button').addEventListener('click', () => {
    event.preventDefault()
    const client = {
        firstName: document.forms.registrationForm.firstName.value,
        lastName: document.forms.registrationForm.lastName.value,
        birthDate: document.forms.registrationForm.birthDate.value,
        adress: document.forms.registrationForm.adress.value,
        gender: document.forms.registrationForm.gender.value,
        city: document.forms.registrationForm.city.value,
        language: document.forms.registrationForm.language,
      }

    const clientLanguage = client.language
    const selectedValues = [...client.language]
        .filter(clientLanguage => clientLanguage.checked)
        .map(clientLanguage => clientLanguage.value).join(", ");


    const validationName = /^[A-ZА-Я][a-zа-я]{1,}$/;
    const validationAdress = /^[A-ZА-Я][a-zа-я0-9.,-]{4,}$/;
    const validationDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    const registrationForm = document.getElementById('registrationForm');


    if (!validationName.test(client.firstName) || !validationName.test(client.lastName) || !validationAdress.test(client.adress)) {
        const notification = document.getElementById('notification');
        console.log(client)
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

    if (!validationDate.test(client.birthDate)) {
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
    <p>Имя: ${client.firstName}</p>
    <p>Фамилия: ${client.lastName}</p>
    <p>Дата рождения: ${client.birthDate}</p>
    <p>Пол: ${client.gender}</p>
    <p>Город: ${client.city}</p>
    <p>Адрес: ${client.adress}</p>
    <p>Язык: ${selectedValues}</p>
    `;

    document.getElementById('registrationForm').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').classList.add('results')

})