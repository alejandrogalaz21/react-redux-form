import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ input, ...props }) => {
  return (
    <div>
      {props.type === 'textarea'
        ? <textarea id={props.id} {...props} {...input} /> 
        : <input id={props.id} {...props} {...input} />
      }
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
}

export { Input }
