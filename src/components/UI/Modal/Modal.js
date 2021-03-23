// import React from "react"
// import Backdrop from "../Backdrop/Backdrop"
//
//
// class Modal extends React.Component {
//
//   shouldComponentUpdate(nextProps, nextState){
//     if(nextProps.show !== this.props.show){
//       return true;
//     }
//   }
//   componentWillUpdate(){
//     console.log("modal will update");
//   }
//   render(){
//     return(
//       <>
//       <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
//       <div
//
//       className="modal"
//       style={{
//         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: this.props.show ? '1' : '0'
//       }}
//
//       >  {this.props.children} </div>
//       </>
//     )
//   }
// }
//
//
// export default Modal

import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalExampleCloseIcon() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>

      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleCloseIcon
