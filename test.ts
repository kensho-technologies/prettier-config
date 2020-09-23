import {format, resolveConfig} from 'prettier'
import * as fs from 'fs'

const FIXTURES_DIR = `${__dirname}/fixtures`

const filenames = fs.readdirSync(FIXTURES_DIR)

for (const filename of filenames) {
  test(`formats ${filename}`, async () => {
    const filepath = `${FIXTURES_DIR}/${filename}`
    const config = await resolveConfig(filepath)
    const source = fs.readFileSync(filepath, 'utf-8')
    expect(format(source, {...config, filepath})).toBe(source)
  })
}
