function merge<T extends object, C extends object> (objA: T, objB: C): T & C {
  return Object.assign(objA, objB);
}

