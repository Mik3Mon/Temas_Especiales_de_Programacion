// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;
//const students = [];

router.post('/account', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const students = [];

    for (let i = 0; i < limit; i++) {
        let name = faker.name.firstName();
        let lastName = faker.name.lastName();
        const student = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(18, 28),
            grade: getRandomIntInclusive(1, 9),
            email: faker.internet.email(name, lastName),
            is_regular: getRandomBoolRegular(),
            is_ScholarshipHolder: getRandomBoolSchoolarship()
        };
    
        students.push(student);
    }

    res.send(students);
});

/*
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const student = students.find((student) => student.id === id);
    res.send({student});
});
*/

/**
 * 
 *Get students with scholarship
 *
 */
router.get('/scholarshipHolder', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const students = [];
    const response = [];

    for (let i = 0; i < limit; i++) {
        let name = faker.name.firstName();
        let lastName = faker.name.lastName();
        const student = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(18, 28),
            grade: getRandomIntInclusive(1, 9),
            email: faker.internet.email(name, lastName),
            is_regular: getRandomBoolRegular(),
            is_ScholarshipHolder: getRandomBoolSchoolarship()
        };
    
        students.push(student);
    }

    for(let i = 0; i < students.length; i++) {
        if(students[i].is_ScholarshipHolder === true) {
            response.push(students[i]);
        }
    }

    res.send({
        message: 'Students:',
        all: students,
        scholarshipStudents: response
    });
});

/**
 * 
 *Get legal age students
 *
 */
router.get('/legalAge', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const students = [];
    const response = [];

    for (let i = 0; i < limit; i++) {
        let name = faker.name.firstName();
        let lastName = faker.name.lastName();
        const student = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(18, 28),
            grade: getRandomIntInclusive(1, 9),
            email: faker.internet.email(name, lastName),
            is_regular: getRandomBoolRegular(),
            is_ScholarshipHolder: getRandomBoolSchoolarship()
        };
    
        students.push(student);
    }

    for(let i = 0; i < students.length; i++) {
        if(students[i].age >= 21) {
            response.push(students[i]);
        }
    }

    res.send({
        message: 'Students:',
        all: students,
        legalAgeStudents: response
    });
});

/**
 * 
 *Get students by range age (26 - 28)
 *
 */
router.get('/rangeAge', (req, res) => {
    const limit = req.query.limit || DEFAULT_LIMIT;
    const students = [];
    const response = [];

    for (let i = 0; i < limit; i++) {
        let name = faker.name.firstName();
        let lastName = faker.name.lastName();
        const student = {
            id: `0${i + 1}`,
            name: name,
            lastName: lastName,
            age: getRandomIntInclusive(18, 28),
            grade: getRandomIntInclusive(1, 9),
            email: faker.internet.email(name, lastName),
            is_regular: getRandomBoolRegular(),
            is_ScholarshipHolder: getRandomBoolSchoolarship()
        };
    
        students.push(student);
    }

    for(let i = 0; i < students.length; i++) {
        if(students[i].age >= 26 && students[i].age <= 28) {
            response.push(students[i]);
        }
    }

    res.send({
        message: 'Students:',
        all: students,
        rangeAgeStudents: response
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

function getRandomBoolRegular() {
    prob = getRandomIntInclusive(1, 100);
    if(prob >= 0 && prob <= 60) {
        return true;
    }
    else if(prob >= 61 && prob <= 100){
        return false;
    }
}

function getRandomBoolSchoolarship() {
    prob = getRandomIntInclusive(1, 100);
    if(prob >= 0 && prob <= 20) {
        return true;
    }
    else if(prob >= 21 && prob <= 100){
        return false;
    }
}

module.exports = router;
