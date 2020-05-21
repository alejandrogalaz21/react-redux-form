export const isEmpty = (value) =>
  value === null ||
  value === undefined ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0)

// check each key of the objet, if all the key's are empty return true
export const isEmptyObject = (o) =>
  Object.keys(o).reduce(
    (res, k) => res && !(!!o[k] || o[k] === false || !isNaN(parseInt(o[k]))),
    true
  )
