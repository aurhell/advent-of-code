import fs from 'node:fs'
import path from 'node:path'

export default function (dirName: string, fileName: string) {
  return fs.readFileSync(path.join(dirName, fileName), 'utf8')
}
