import readInput from '../../utils/readInput'

const input = readInput(__dirname, 'input')

const givenCubes: {
  [key: string]: number;
} = { blue: 14, red: 12, green: 13 }

type Set = { color: string; value: number }

export function getGameId(game: string): number {
  const gameId = game.split(':')[0].split(' ')[1]
  return Number(gameId)
}

export function getParsedSetsOfCubes(game: string): Set[][] {
  const setsOfCubes = game.split(':')[1].split(';')

  const parsedSetsOfCubes = setsOfCubes.map((set) => {
    const parsedSet = set.split(',').map((cube) => {
      const color = cube.trim().split(' ')[1]
      const number = Number(cube.trim().split(' ')[0])
      const set: Set = { color, value: number }
      return set
    })
    return parsedSet
  })
  
  return parsedSetsOfCubes
}

export function isGamePossible(game: string, givenCubes: { [key: string]: number; }): boolean {
  const parsedSetsOfCubes = getParsedSetsOfCubes(game).flat()
  
  return parsedSetsOfCubes.every(({ color, value }) => value <= givenCubes[color])
}

export function puzzle1(input: string) {
  const getSumOfPossibleGamesId = input.split('\n').reduce((acc, curr) => {
    if (!curr) return acc

    const isPossible = isGamePossible(curr, givenCubes)
    if (isPossible) {
      return acc + getGameId(curr)
    }

    return acc
  }, 0)

  return getSumOfPossibleGamesId
}

console.log(puzzle1(input))

export function getFewestNumbersOfCubesRequired(sets: Set[]): { [key: string]: number; } {
  const fewestNumbersOfCubesRequired = sets.reduce((acc, curr) => {
    if (!curr) return acc

    if (!acc[curr.color]) {
      acc[curr.color] = 0
    }

    if (acc[curr.color] < curr.value) {
      acc[curr.color] = curr.value
    }

    return acc
  }, {})

  return fewestNumbersOfCubesRequired
}

export function getPowerOfSet(fewestNumbersOfCubesRequired: { [key: string]: number; }): number {
  return fewestNumbersOfCubesRequired['blue'] * fewestNumbersOfCubesRequired['red'] * fewestNumbersOfCubesRequired['green']
}

export function puzzle2(input: string) {
  return input.split('\n').reduce((acc, curr) => {
    if (curr?.length === 0) return acc

    const parsedSetsOfCubes = getParsedSetsOfCubes(curr).flat()
    const fewestNumbersOfCubesRequired = getFewestNumbersOfCubesRequired(parsedSetsOfCubes)
    const powerOfSet = getPowerOfSet(fewestNumbersOfCubesRequired)

    return acc + powerOfSet
  }, 0)
}

console.log(puzzle2(input))

