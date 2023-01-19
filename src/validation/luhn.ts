export default function isValid(val: string | number) {
    const numbers = String(val)
    .split('')
    .filter(n => n !== ' ')
    .reverse()
    .map(n => parseInt(n, 10))

  const lasNum = numbers.shift() as number

  let sum = numbers.reduce((acc, num, i) => {
    return i % 2 !== 0 ? acc + num : acc + num * 2 % 9 || 9
  }, 0)

  sum += lasNum

  return sum % 10 === 0
}
