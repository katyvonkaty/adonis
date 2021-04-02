import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExample = (props) =>  {

  let inputElement = null;

  switch(props.elementType) {
  case('input'):
    inputElement = <input {...props.elementConfig}
    {...props.elementConfig}
    value={props.value}
    onChange={props.onChange}
 />
    break;
  case("textarea"):
    inputElement = <textarea {...props.elementConfig}
    {...props.elementConfig}
    value = {props.value}
    onChange={props.onChange}

     />

    break;
    case("select"):
      inputElement = (
        <select
      value = {props.value}
      onChange={props.onChange}
      {...props.elementConfig.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
       />

      )

      break;
  default:
    inputElement = <input {...props.elementConfig}
    {...props.elementConfig}
    value = {props.value}
        onChange={props.onChange}/>

}

  return (
    <>
    <Input placeholder={props.label} value = {props.value} {...props.elementConfig}  />
    </>
  )
}

export default InputExample
