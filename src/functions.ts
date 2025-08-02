interface MathFunc {
  (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number => {
  return x + y
}

const sub: MathFunc = (x: number, y: number) => {
  return x - y
}

const log = (message: string): void => {
  console.log(message)
}
