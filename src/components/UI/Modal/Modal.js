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
import { Header, Icon, Modal, Button } from 'semantic-ui-react'

class ModalExampleCloseIcon extends React.Component {

state= {
  open:"",
}


  render(){
    return(
      <>

      <Modal
        closeIcon
        open={this.state.open}
        disabled={!this.props.purchaseable}
        onClick={this.props.ordered}
        trigger={<Button floated='right' style={{float:"right"}}>Continue To Checkout</Button>}
        onClose={() => this.setState({open:false})}
        onOpen={() => this.setState({open:true})}
      >
        <Header icon='archive' content='Your Order' />
        <Modal.Content>
        {this.props.children}
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => this.setState({open:false})}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={() => this.setState({open:false})}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      </>
    )
  }

}

export default ModalExampleCloseIcon
