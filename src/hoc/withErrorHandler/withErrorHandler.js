import React from "react";
import ModalExampleCloseIcon from "../../components/UI/Modal/Modal"


const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state={
      error: null
    }
    componentDidMount(){
      axios.interceptors.request.use(req => {
        this.setState({error:null})
      })
      axios.interceptors.response.use(res=> res, error => {
        this.setState({error:error})
      })
    }

    closeModal = () => {
      this.setState({error:null})
    }
    render(){
      return (
        <>
        <ModalExampleCloseIcon show={this.state.error} clicked={this.closeModal}>
          {this.state.error? this.state.error.message : null}

          </ModalExampleCloseIcon>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default withErrorHandler
