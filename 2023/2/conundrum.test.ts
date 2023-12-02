import { getGameId, isGamePossible, puzzle1 } from './conundrum'
import readInput from '../../utils/readInput'

const puzzle1exampleInput = readInput(__dirname, 'example.input')

describe('2023 - 2 - conundrum', () => {
  describe('Puzzle 1', () => {
    test('getGameId', () => {
      const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
      const gameId = getGameId(input)
  
      expect(gameId).toBe(1)
    })
    test('parsing is ok', () => {})
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
})
