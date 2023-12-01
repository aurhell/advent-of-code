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

export const puzzle2 = (input: string) => {
  function alphaToDigit(alpha: string): number {
    switch (alpha) {
      case 'one': return 1
      case 'two': return 2
      case 'three': return 3
      case 'four': return 4
      case 'five': return 5
      case 'six': return 6
      case 'seven': return 7
      case 'eight': return 8
      case 'nine': return 9
      default: return alpha as unknown as number
    }
  }

  return input.split('\n').reduce((acc, curr) => {
    if (!curr) return acc

    const regex = /(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g
    const digits = [...curr.matchAll(regex)].map(match => alphaToDigit(match[1]))
    const calibration = Number(`${digits[0]}${digits[digits.length - 1]}`)

    return acc + calibration
  }, 0)
}

console.log(puzzle1(input))
console.log(puzzle2(input))
