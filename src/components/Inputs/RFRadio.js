import React from 'react'
import PropTypes from 'prop-types'

export const Radio = ({ options, input }) => {
  return options.map(option => (
    <div key={option.id}>
      <input
        id={option.id}
        {...input}
        type="radio"
        value={option.value}
        checked={option.value === input.value}
      />
      <label htmlFor={option.id}> {option.label}</label>
    </div>
  ))
}

Radio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}
