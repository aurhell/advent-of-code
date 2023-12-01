import readInput from '../../utils/readInput'

const input = readInput(__dirname, 'input')

export const puzzle1 = (input: string) => { 
  return input.split('\n').reduce((acc, curr) => {
    if (!curr) return acc

    const digits = Array.from(curr).filter(Number)
    const calibration = Number(`${digits[0]}${digits[digits.length - 1]}`)

    return acc + calibration
  }, 0)
}

console.log(puzzle1(input))
