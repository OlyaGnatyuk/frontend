'use strict';

function printUser(user) {
    console.log('-----------');
    for (let fieldKey of Object.keys(user)) {
        console.log(fieldKey + ': ' + user[fieldKey]);
    }
}

fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        const data = jsonData.data;
        console.log('-----------');
        console.log('Пункт №1:', data);
        console.log('-----------');
        return data;
    })
    .then((users) => {
        console.log('-----------');
        console.log('Пункт №2:');
        users.forEach((user, index) => {
            console.log(users[index].last_name);
        });
        console.log('-----------');
        console.log('-----------');
        console.log('Пункт №3:');
        const lastNameOnF = users.filter((user, index) => {
            return user.last_name[0] === 'F';
        });
        lastNameOnF.forEach((user, index) => {
            printUser(lastNameOnF[index])
        })
        // console.log(lastNameOnF);
        console.log('-----------');
        console.log('-----------');
        console.log('Пункт №4:');
        const names = users.reduce((names, user) => {
            names = names + user.first_name + ' ' + user.last_name +', ';
            return names;
        },'');
        console.log('Наша база содержит данные следующих пользователей: ', names);
        console.log('-----------');
        console.log('-----------');
        console.log('Пункт №5:');
        for (let userKey of Object.keys(users[0])) {
            console.log(userKey);
        }
        console.log('-----------');
    })