import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment } from 'semantic-ui-react'

import books from "../../../assets/images/books.png"
import partner from "../../../assets/images/partner.png"
import finance from "../../../assets/images/finance.png"
import humor from "../../../assets/images/humor.png"
import she from "../../../assets/images/she.png"
import they from "../../../assets/images/they.png"
import male from "../../../assets/images/male.png"
import kindness from "../../../assets/images/kindness.png"


class PartnerTraits extends React.Component {
  render(){
    let trait =  null

    switch( this.props.type ) {
      case('male'):
       trait =  <> <img src={male} style={{width:"20%",  float:"left"}} /> </>
        break;
      case('female'):
          trait =  <> <img src={she} style={{width:"20%",  float:"left"}} /> </>
          break;
      case('they'):
        trait =  <> <img src={they}  style={{width:"20%", float:"left"}} /> </>
        break;
      case('books'):
        trait = <> <img style={{width:"10%",float:"right"}} src={books} /> </>
        break;
      case("humor"):
        trait = <><img src={humor} style={{width:"10%",float:"right"}} /> </>
        break;
      case("kindness"):
        trait = <><img src={kindness} style={{width:"20%",float:"right"}} />   </>
        break;
      case("cooking"):
        trait = <><img style={{width:"10%",float:"right"}} src="https://st.depositphotos.com/1808169/1392/v/950/depositphotos_13925735-stock-illustration-cartoon-donut-illustration.jpg" style={{width:"20%"}} /> </>
      case("financial_savy"):
        trait = <> <img src={finance} style={{width:"10%",float:"right"}} /> </>
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
