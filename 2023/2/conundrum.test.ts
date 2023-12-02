import { getGameId, isGamePossible, puzzle1, getParsedSetsOfCubes, getPowerOfSet, getFewestNumbersOfCubesRequired, puzzle2 } from './conundrum'
import readInput from '../../utils/readInput'

const puzzle1exampleInput = readInput(__dirname, 'example.input')

describe('2023 - 2 - conundrum', () => {
  describe('Puzzle 1', () => {
    test('getGameId', () => {
      const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
      const gameId = getGameId(input)
  
      expect(gameId).toBe(1)
    })
    test('game is possible', () => {
      const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
      const givenCubes = { blue: 14, red: 12, green: 13 }
  
      const isPossible = isGamePossible(input, givenCubes)
      expect(isPossible).toBe(true)
    })
    test('game is immpossible', () => {
      const input = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
      const givenCubes = { blue: 14, red: 12, green: 13 }
  
      const isPossible = isGamePossible(input, givenCubes)
      expect(isPossible).toBe(false)
    })
    test('solve example of puzzle 1', () => {
      const result = puzzle1(puzzle1exampleInput)
      expect(result).toBe(8)
    })
  })

  describe('Puzzle 2', () => {
    test('solve puzzle 2 example 1', () => {
      const parsedSetsOfCubes = getParsedSetsOfCubes('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green').flat()
      const fewestNumbersOfCubesRequired = getFewestNumbersOfCubesRequired(parsedSetsOfCubes)
      const powerOfSet = getPowerOfSet(fewestNumbersOfCubesRequired)
      expect(powerOfSet).toBe(48)
    })
    test('solve puzzle 2 example 2', () => {
      const parsedSetsOfCubes = getParsedSetsOfCubes('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue').flat()
      const fewestNumbersOfCubesRequired = getFewestNumbersOfCubesRequired(parsedSetsOfCubes)
      const powerOfSet = getPowerOfSet(fewestNumbersOfCubesRequired)
      expect(powerOfSet).toBe(12)
    })
    test('solve puzzle 2 example 3', () => {
      const parsedSetsOfCubes = getParsedSetsOfCubes('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red').flat()
      const fewestNumbersOfCubesRequired = getFewestNumbersOfCubesRequired(parsedSetsOfCubes)
      const powerOfSet = getPowerOfSet(fewestNumbersOfCubesRequired)
      expect(powerOfSet).toBe(1560)
    })
    test('solve puzzle 2 example 4', () => {
      const parsedSetsOfCubes = getParsedSetsOfCubes('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red').flat()
      const fewestNumbersOfCubesRequired = getFewestNumbersOfCubesRequired(parsedSetsOfCubes)
      const powerOfSet = getPowerOfSet(fewestNumbersOfCubesRequired)
      expect(powerOfSet).toBe(630)
    })
    test('solve puzzle 2 example 5', () => {
      const parsedSetsOfCubes = getParsedSetsOfCubes('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green').flat()
      const fewestNumbersOfCubesRequired = getFewestNumbersOfCubesRequired(parsedSetsOfCubes)
      const powerOfSet = getPowerOfSet(fewestNumbersOfCubesRequired)
      expect(powerOfSet).toBe(36)
    })
    test('solve example of puzzle 2', () => {
      const result = puzzle2(puzzle1exampleInput)
      expect(result).toBe(2286)
    })
  })
})
