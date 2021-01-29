// простая функция для глубокого клонирования

export function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

// в продакшене так лучше не делать.
export function deepEqual (a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}
