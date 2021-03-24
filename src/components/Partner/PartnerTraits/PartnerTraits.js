import React from "react"
import PropTypes from "prop-types"

import books from "../../../assets/images/books.png"
import finance from "../../../assets/images/finance.png"
import humor from "../../../assets/images/humor.png"
import avocado from "../../../assets/images/avocado.png"
import she from "../../../assets/images/she.png"
import they from "../../../assets/images/they.png"
import male from "../../../assets/images/male.png"
import kindness from "../../../assets/images/kindness.png"


class PartnerTraits extends React.Component {
  render(){
    let trait =  null

    switch( this.props.type ) {
      case('male'):
       trait =  <> <img src={male} alt="male" style={{width:"20%",  float:"left"}} /> </>
        break;
      case('female'):
          trait =  <> <img src={she} alt="female" style={{width:"20%",  float:"left"}} /> </>
          break;
      case('they'):
        trait =  <> <img src={they} alt="they" style={{width:"20%", float:"left"}} /> </>
        break;
      case('books'):
        trait = <> <img  alt="books" style={{width:"10%",float:"right"}} src={books} /> </>
        break;
      case("humor"):
        trait = <><img  alt="humor" src={humor} style={{width:"10%",float:"right"}} /> </>
        break;
      case("kindness"):
        trait = <><img  alt="kindness"  src={kindness} style={{width:"10%",float:"right"}} /> </>
        break;
      case("cooking"):
        trait = <><img  alt="cooking" src={avocado} style={{width:"10%",float:"right"}}  /> </>
        break;
      case("financial_savy"):
        trait = <> <img  alt="savy"  src={finance} style={{width:"10%",float:"right"}} /> </>
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
