const express = require('express');
const router = express.Router();

const { faker, RandomModule } = require('@faker-js/faker');
const { response } = require('express');

const DEFAULT_LIMIT = 20;
//const teachers = [];

router.post('/account', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const teachers = [];
    
    for (let i = 0; i < limit; i++) {
        let gender = getRandomGender();
        let name = faker.name.firstName(gender);
        let lastName = faker.name.lastName();
        const teacher = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(26, 99),
            gender: gender,
            email: faker.internet.email(name, lastName),
            movil: faker.phone.number('55-####-####'),
            address: faker.address.streetAddress()
        };

        teachers.push(teacher);
    }

    res.send(teachers);
});

/*
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const teacher = teachers.find((teacher) => teacher.id === id);
    res.send({teacher});
});
*/

/**
 * 
 *Get 'X' teachers 
 *
 */
 router.get('/teacher/xTeachers/:number', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const teachers = [];
    const response = [];
    
    for (let i = 0; i < limit; i++) {
        let gender = getRandomGender();
        let name = faker.name.firstName(gender);
        let lastName = faker.name.lastName();
        const teacher = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(26, 99),
            gender: gender,
            email: faker.internet.email(name, lastName),
            movil: faker.phone.number('55-####-####'),
            address: faker.address.streetAddress()
        };

        teachers.push(teacher);
    }
    const { number } = req.params;
    for(let i = 0; i < teachers.length; i++) {
        while(i != number) {
            response.push(teachers[i])
        }
    }

    res.send ({
        message: 'Teachers:',
        all: teachers,
        xTeachers: response
    });
});

/**
 * 
 *Get teachers by id
 *
 */
router.get('/teacher/:id', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const teachers = [];
    
    for (let i = 0; i < limit; i++) {
        let gender = getRandomGender();
        let name = faker.name.firstName(gender);
        let lastName = faker.name.lastName();
        const teacher = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(26, 99),
            gender: gender,
            email: faker.internet.email(name, lastName),
            movil: faker.phone.number('55-####-####'),
            address: faker.address.streetAddress()
        };

        teachers.push(teacher);
    }

    const { id } = req.params;
    const teacher = teachers.find((teacher) => teacher.id === id);
    
    res.send ({
        message: 'Teachers:',
        all: teachers,
        teacherById: teacher
    });
});

/**
 * 
 *Get teachers group by first letter on his last name
 *
 */
router.get('/teacher/firstLetterLastName/:letter', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const teachers = [];
    const response = [];
    
    for (let i = 0; i < limit; i++) {
        let gender = getRandomGender();
        let name = faker.name.firstName(gender);
        let lastName = faker.name.lastName();
        const teacher = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(26, 99),
            gender: gender,
            email: faker.internet.email(name, lastName),
            movil: faker.phone.number('55-####-####'),
            address: faker.address.streetAddress()
        };

        teachers.push(teacher);
    }

    const { letter } = req.params;
    for(let i = 0; i < teachers.length; i++) {
        if(letter === teachers[i].lastName.charAt(0)) {
            response.push(teachers[i]);
        }
    }

    res.send({
        message: 'Teachers:',
        all: teachers,
        teachersByLastName: response
    });
});

/**
 * 
 *Get teacher by range age (26 - 28)
 *
 */
router.get('/rangeAge', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const teachers = [];
    const response = [];
    
    for (let i = 0; i < limit; i++) {
        let gender = getRandomGender();
        let name = faker.name.firstName(gender);
        let lastName = faker.name.lastName();
        const teacher = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(26, 99),
            gender: gender,
            email: faker.internet.email(name, lastName),
            movil: faker.phone.number('55-####-####'),
            address: faker.address.streetAddress()
        };

        teachers.push(teacher);
    }

    for(let i = 0; i < teachers.length; i++) {
        if(teachers[i].age >= 26 && teachers[i].age <= 28) {
            response.push(teachers[i]);
        }
    }

    res.send({
        message: 'Teachers:',
        all: teachers,
        rangeAgeTeachers: response
    });
});

/**
 * 
 *Funtions
 *
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomGender() {
    prob = getRandomIntInclusive(1, 10);
    if(prob >= 1 && prob <= 5) {
        return 'male';
    }
    else if(prob >= 6 && prob <= 10){
        return 'female';
    }
}

module.exports = router;