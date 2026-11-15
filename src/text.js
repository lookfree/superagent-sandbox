/** Small text helpers used to exercise the agent on real code. */
export function slugify(input) {
  return input.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function wordCount(input) {
  return input.split(/\s+/).filter(Boolean).length
}
