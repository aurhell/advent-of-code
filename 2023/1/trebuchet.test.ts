import { puzzle1, puzzle2 } from './trebuchet'
import readInput from '../../utils/readInput'

const puzzle1exampleInput = readInput(__dirname, 'puzzle-1.example.input')
const puzzle2exampleInput = readInput(__dirname, 'puzzle-2.example.input')
const myInput = readInput(__dirname, 'puzzle-1.my.input')

describe('2023 - 1 - trebuchet', () => {
  test('puzzle 1 with example input', () => {
    expect(puzzle1(puzzle1exampleInput)).toBe(142)
  })

  test('puzzle 1 with my input', () => {
    expect(puzzle1(myInput)).toBe(47)
  })

  test('puzzle 2 with example input', () => {
    expect(puzzle2(puzzle2exampleInput)).toBe(281)
  })

  test('puzzle 2 with only numbers', () => {
    expect(puzzle2('5173')).toBe(53)
  })

  test('puzzle 2 with word at the beginning and at the end', () => {
    expect(puzzle2('six4ornferfi8three')).toBe(63)
  })

  test('puzzle 2 with word at the beginning', () => {
    expect(puzzle2('six4ornferfi8')).toBe(68)
  })

  test('puzzle 2 with word at the end', () => {
    expect(puzzle2('4ornferfi8three')).toBe(43)
  })

  test('puzzle 2 with word one', () => {
    expect(puzzle2('one887')).toBe(17)
  })

  test('puzzle 2 with word two', () => {
    expect(puzzle2('4oerfpio77675twonetwo')).toBe(42)
  })

  test('puzzle 2 with word six', () => {
    expect(puzzle2('kiuzenfsixzefn984782')).toBe(62)
  })
  test('puzzle 2 with word eight', () => {
    expect(puzzle2('eightnine')).toBe(89)
  })

  test('seven5seven3seven4zgtnnkkgseveneightwosg is 72', () => {
    expect(puzzle2('seven5seven3seven4zgtnnkkgseveneightwosg')).toBe(72)
  })  
})


