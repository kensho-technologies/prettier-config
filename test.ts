import * as fs from 'fs'

import {expect, test} from '@jest/globals'
import {format, resolveConfig} from 'prettier'

const FIXTURES_DIR = `${__dirname}/fixtures`

const filenames = fs.readdirSync(FIXTURES_DIR)

filenames.forEach((filename) => {
  test(`formats ${filename}`, async () => {
    const filepath = `${FIXTURES_DIR}/${filename}`
    const config = await resolveConfig(filepath)
    const source = fs.readFileSync(filepath, 'utf-8')
    expect(format(source, {...config, filepath})).toBe(source)
  })
})
