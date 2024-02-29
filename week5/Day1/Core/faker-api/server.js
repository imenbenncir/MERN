const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    return {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

const createCompany = () => {
    return {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
};
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({response : newUser, company: newCompany });
});







// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

// we can create a function to return a random / fake "Product"

// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);

// app.get("/api", (req, res) => {
//         res.json(newFakeProduct );
//     });
    const newUser = createUser();
    console.log(newUser)
    const newCompany = createCompany();
    console.log(newCompany)





app.listen( port, () => console.log(`Listening on port: ${port}`) );