import { describe, expect, it } from 'vitest'

import { libTemplate } from '../src'

describe('libTemplate ', () => {
  it('should run', () => {
    expect(libTemplate()).toEqual('lib-template')
  })
})
