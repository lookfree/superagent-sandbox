import { test } from 'node:test'
import assert from 'node:assert/strict'
import { slugify, wordCount } from '../src/text.js'

test('slugify lowercases and joins words with dashes', () => {
  assert.equal(slugify('  Hello World! '), 'hello-world')
})

test('slugify collapses consecutive spaces inside a slug', () => {
  assert.equal(slugify('Hello   World'), 'hello-world')
})

test('slugify collapses runs of spaces and surrounding whitespace', () => {
  assert.equal(slugify('   Hello    World   '), 'hello-world')
})

test('slugify produces no empty segments for spaces mixed with punctuation', () => {
  assert.equal(slugify('Hello  ,  World'), 'hello-world')
})

test('slugify returns an empty string for input made only of spaces', () => {
  assert.equal(slugify('     '), '')
})

test('wordCount counts words separated by whitespace', () => {
  assert.equal(wordCount('one two  three'), 3)
})
