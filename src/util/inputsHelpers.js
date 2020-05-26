export const required = value =>
  value || typeof value === 'number' ? undefined : 'Requerido'

export const maxLength = max => value =>
  value && value.length > max ? `Máximo ${max} caracteres` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Mínimo ${min} caracteres` : undefined

export const number = value =>
  value && isNaN(Number(value)) ? 'Debe ser número' : undefined

export const minValue = min => value =>
  value && value < min ? `Valor mínimo ${min}` : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Correo electrónico no válido'
    : undefined

export const tooYoung = value =>
  value && value < 13 ? 'No cumple la edad mínima' : undefined

export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

export const alphanumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Sólo se aceptan caracteres alfanúmericos'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Número de télefono inválido, deben ser 10 dígitos'
    : undefined

export const capitalizeWords = str =>
  str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )

export const maxLength15 = maxLength(15)
export const minLength2 = minLength(2)
export const minValue13 = minValue(13)
