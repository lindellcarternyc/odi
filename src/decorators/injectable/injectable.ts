const Injectable = <T = any>(constructor: Constructable<T>): Constructable<T> => {
  const original = constructor

  return constructor
}

export default Injectable