const express = require('express')
const app = express()
const { faker } = require('@faker-js/faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// everything else goes here (routes & controllers)
const generateUserObj = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const generateCompanyObj = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    },
});

// const createSong = () => {
//     const genre = faker.music.genre()
//     const song = faker.music.songName()
//     return {genre, song}
// }

// app.get('/api/newSong', (request, response) => {
//     const genre = faker.music.genre()
//     const song = faker.music.songName()
//     response.json({genre, song})
// })

app.get("/api/users/new", (request, response) => {
    const newUser = generateUserObj();
    response.json(newUser);
});

app.get("/api/companies/new", (request, response) => {
    const newCompany = generateCompanyObj();
    response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
    const newUser = generateUserObj();
    const newCompany = generateCompanyObj();
    const responseObj = {
        user: newUser,
        company: newCompany
    }
    response.json(responseObj);
});

app.listen(8000, () => console.log('Listening on Port 8000'))