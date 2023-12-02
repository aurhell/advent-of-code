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

// function getSumOfCubesByColor(setsOfCubes: Set[][]): { [key: string]: number } {
//   return setsOfCubes.reduce((acc, curr) => {
//     curr.forEach((cube) => {
//       acc[cube.color] = acc[cube.color] ? acc[cube.color] + cube.value : cube.value
//     })

//     return acc
//   }, {})
// }

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
