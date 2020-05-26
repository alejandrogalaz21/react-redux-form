import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export const Select = ({ input, ...props }) => {
  return (
    <select {...input} {...props}>
      <option value=""></option>
      {props.options.map(item => (
        <option
          key={item.value}
          value={item.value}
          selected={item.value === input.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export const SelectAsync = props => {
  const [options, setOptions] = useState([])
  useEffect(() => {
    axios
      .get(props.url)
      .then(result => result.data.map(props.formattter))
      .then(setOptions)
      .catch(console.log)
  }, [props.formattter, props.url])

  return <Select {...props} options={options} />
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
}
