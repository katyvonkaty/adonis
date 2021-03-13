import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment } from 'semantic-ui-react'

import book from "../../../assets/images/book.png"
import partner from "../../../assets/images/partner.png"
import finance from "../../../assets/images/finance.png"
import humor from "../../../assets/images/humor.png"



class PartnerTraits extends React.Component {
  render(){
    let trait =  null



    switch( this.props.type ) {
      case('partner'):
        trait = <div> <img src={partner} style={{width:"30%", float:"left"}} /> </div>
        break;
      case('books'):
        trait = <div> <img src="https://static.vecteezy.com/system/resources/previews/000/165/640/original/kindness-illustration-vector.png" style={{width:"20%"}} /></div>
        break;
      case("humor"):
        trait = <div><img src="https://static.vecteezy.com/system/resources/previews/000/165/640/original/kindness-illustration-vector.png" style={{width:"20%"}} /> </div>
        break;
      case("kindness"):
        trait = <div><img src="https://static.vecteezy.com/system/resources/previews/000/165/640/original/kindness-illustration-vector.png" style={{width:"20%"}} />  </div>
        break;
      case("cooking"):
        trait = <div><img src="https://st.depositphotos.com/1808169/1392/v/950/depositphotos_13925735-stock-illustration-cartoon-donut-illustration.jpg" style={{width:"20%"}} /> </div>
        break;
      case("financial_savy"):
        trait = <div ><img src={finance} style={{width:"20%"}} /> </div>
        break;
      default:
      trait = null
    }
    return(
        trait

    )
  }

}

PartnerTraits.propTypes = {
  type: PropTypes.string.isRequired
}

export default PartnerTraits
