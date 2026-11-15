import { test } from 'node:test'
import assert from 'node:assert/strict'
import { slugify, wordCount } from '../src/text.js'

test('slugify lowercases and joins words with dashes', () => {
  assert.equal(slugify('  Hello World! '), 'hello-world')
})

test('wordCount counts words separated by whitespace', () => {
  assert.equal(wordCount('one two  three'), 3)
})
