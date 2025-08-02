const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    email: 'john@doe.com',
    orders: [{
            productId: '1',
            price: 200
        }],
    register() {
        return 'Novo usuário!';
    },
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    email: 'author@email.com',
    orders: [],
    books: ['Book 1', 'Book 2'],
    register() {
        return 'Novo author!';
    },
};
const newUser = {
    firstName: 'John',
    email: 'john@doe.com',
    login() {
        return 'Usuário logado!';
    }
};
const newAuthor = {
    firstName: 'Jane',
    email: 'jane@doe.com',
    books: [],
    login() {
        return 'Author logado!';
    }
};
const grade = 1;
export {};
//# sourceMappingURL=objects.js.map