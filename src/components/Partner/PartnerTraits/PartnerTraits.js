import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment } from 'semantic-ui-react'

import book from "../../../assets/images/book.png"
import partner from "../../../assets/images/partner.png"
import finance from "../../../assets/images/finance.png"
import humor from "../../../assets/images/humor.png"
import she from "../../../assets/images/she.png"
import they from "../../../assets/images/they.png"
import male from "../../../assets/images/male.png"






class PartnerTraits extends React.Component {
  render(){
    let trait =  null

    switch( this.props.type ) {
      case('male'):
       trait =  <> <img src={male} style={{width:"30%"}} /> </>
        break;
      case('female'):
          trait =  <> <img src={she} style={{width:"30%"}} /> </>
          break;
      case('they'):
        trait =  <> <img src={they} style={{width:"30%"}} /> </>
        break;
      case('books'):
        trait = <> <img style={{width:"30%",float:"left"}} src="https://static.vecteezy.com/system/resources/previews/000/165/640/original/kindness-illustration-vector.png" style={{width:"20%"}} /> </>
        break;
      case("humor"):
        trait = <><img style={{width:"30%",float:"left"}} src="https://static.vecteezy.com/system/resources/previews/000/165/640/original/kindness-illustration-vector.png" style={{width:"20%"}} /> </>
        break;
      case("kindness"):
        trait = <><img style={{width:"30%",float:"left"}} src="https://static.vecteezy.com/system/resources/previews/000/165/640/original/kindness-illustration-vector.png" style={{width:"20%"}} />  </>
        break;
      case("cooking"):
        trait = <><img style={{width:"30%",float:"right"}} src="https://st.depositphotos.com/1808169/1392/v/950/depositphotos_13925735-stock-illustration-cartoon-donut-illustration.jpg" style={{width:"20%"}} /> </>
      case("financial_savy"):
        trait = <> <img src={finance} style={{width:"30%",float:"right"}} /> </>
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
