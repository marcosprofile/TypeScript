// Type
type Order = {
  productId: string
  price: number
}

type User = {
  firstName: string
  lastName: string
  age: number
  email: string
  password?: string,
  orders?: Order[],
  register(): string
}

const user: User = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  email: 'john@doe.com',
  orders: [{
    productId: '1',
    price: 200
  }],
  register() {
    return 'Novo usuário!'
  },
}

const printLog = (message: string) => { }

printLog(user.password!)

// Unions
type Author = {
  books: string[]
}

const author: Author & User = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  email: 'author@email.com',
  orders: [],
  books: ['Book 1', 'Book 2'],
  register() {
    return 'Novo author!'
  },
}

// Interfaces
interface UserInterface {
  readonly firstName: string
  email: string
  login(): string
}

const newUser: UserInterface = {
  firstName: 'John',
  email: 'john@doe.com',
  login() {
    return 'Usuário logado!'
  }
}

interface AuthorInterface {
  books: string[]
}

const newAuthor: AuthorInterface & UserInterface = {
  firstName: 'Jane',
  email: 'jane@doe.com',
  books: [],
  login() {
    return 'Author logado!'
  }
}

type Grade = number | string
const grade: Grade = 1