// простая функция для глубокого клонирования

export function deepClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}
