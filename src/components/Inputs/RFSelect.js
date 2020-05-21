import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, input, ...props }) => {
  return (
    <div>
      <select {...input} {...props}>
        <option value=""></option>
        {options.map(item => (
          <option value={item.value} selected={item.value === input.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}

export { Select }
