
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
        trigger={<Button  >Continue To Checkout</Button>}
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
          <Button color='green' onClick={this.props.purchaseContinue}>

            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      </>
    )
  }

}

export default ModalExampleCloseIcon
