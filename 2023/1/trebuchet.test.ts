import { puzzle1 } from './trebuchet'
import readInput from '../../utils/readInput'

const exampleInput = readInput(__dirname, 'puzzle-1.example.input')
const myInput = readInput(__dirname, 'puzzle-1.my.input')

describe('2023 - 1 - trebuchet', () => {
  test('puzzle 1 with example input', () => {
    expect(puzzle1(exampleInput)).toBe(142)
  })

  test('puzzle 1 with my input', () => {
    expect(puzzle1(myInput)).toBe(47)
  })
})


