import React, { Fragment } from 'react'
import { Field } from 'redux-form'
import { Input as RSI } from 'reactstrap'

// export const CustomInput = ({
//   input,
//   label,
//   type,
//   placeholder,
//   meta: { touched, error, warning },
//   ...props
// }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <div>
//         <input {...input} placeholder={placeholder} type={type} {...props} />
//         {touched &&
//           ((error && <span className="text-danger">Error : {error}</span>) ||
//             (warning && <span className="text-warning"> Warning : {warning}</span>))}
//       </div>
//     </div>
//   )
// }

// export const CleanInput = ({
//   input,
//   type,
//   placeholder,
//   meta: { touched, error, warning },
//   ...props
// }) => {
//   return (
//     <Fragment>
//       <input {...input} placeholder={placeholder} type={type} {...props} />
//       {touched &&
//         ((error && <span className="text-danger">Error : {error}</span>) ||
//           (warning && <span className="text-warning"> Warning : {warning}</span>))}
//     </Fragment>
//   )
// }

// export const FieldSelect = props => {
//   return (
//     <>
//       <Field {...props} component="select">
//         {props.options &&
//           props.options.map((o, i) => (
//             <option key={i} value={o.value}>
//               {o.name}
//             </option>
//           ))}
//       </Field>
//       {props.touched &&
//         ((props.error && (
//           <span className="text-danger">Error : {props.error}</span>
//         )) ||
//           (props.warning && (
//             <span className="text-warning"> Warning : {props.warning}</span>
//           )))}
//     </>
//   )
// }

// export const InputField = props => FieldInputWrapper(Field, CustomInput, props)

// export const RSInput = props => FieldInputWrapper(Field, RSI, props)

export const renderInput = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
  ...props
}) => (
  <Fragment>
    <input {...input} {...props} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span className="text-warning">{warning}</span>))}
  </Fragment>
)

export const RFFieldInputWrapper = (Field, Input, props) => (
  <Field {...props} component={Input} />
)

// this is for text, checkbox, radio
export const RFInput = props => RFFieldInputWrapper(Field, renderInput, props)

//this is for custom inputs
export const RFComponent = props => {
  return (
    <Fragment>
      <Field {...props} />
      {props.touched &&
        ((props.error && <span className="text-danger">{props.error}</span>) ||
          (props.warning && <span className="text-warning">{props.warning}</span>))}
    </Fragment>
  )
}
