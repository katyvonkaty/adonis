import React from "react"
import PartnerTraits from "./PartnerTraits/PartnerTraits"

const partner = (props) => {
  let transformedTraits = Object.keys(props.traits)
    .map(traitKey => {
      return [...Array(props.traits[traitKey])].map((_, i) => {
        return  <PartnerTraits key={traitKey + i} type={traitKey} />
      })
    })
    .reduce((arr,el) => {
      return arr.concat(el)
    },[])

    if(transformedTraits.length === 0) {
      transformedTraits = <p> Please start building your love! </p>
    }

    console.log(transformedTraits)
  return (
    <div className="wrapper">
      <PartnerTraits type="books" />
        {transformedTraits}
      <PartnerTraits type="kindness" />

    </div>
  )
}


export default partner
