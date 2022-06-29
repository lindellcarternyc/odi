import Injectable from './injectable'

describe('Injectable', () => {
  it('accepts a Constructable object and returns a constructor', () => {
    class Test { }
    const T2 = Injectable(Test)
    expect(typeof T2).toBe('function')
  })
})