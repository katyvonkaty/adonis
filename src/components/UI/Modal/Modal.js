import React from "react"

const modal = (props) => (
  <div
  className="modal"
  style={{
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  }}

  > {props.children} </div>
)

export default modal
