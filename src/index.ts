let age: number = 5
const firstName: string = 'Marcos'
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ['Marcos', 'João', 'Maria']

// Tupla
const person: [number, string] = [1, 'John']

// Lista de Tuplas
const persons: [number, string][] = [
  [1, 'John'],
  [2, 'Jane']
]

// Intersactions
const productId: string | number = 1

// Enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = 'Esquerda'
}

const direction = Direction.Left

// Type Assertions
const productName: any = 'Chapéu'

// let itemId = productName as string
let itemId = <string>productName